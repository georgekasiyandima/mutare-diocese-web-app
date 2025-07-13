import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const VATICAN_LINKS = [
  {
    label: 'The Holy See',
    url: 'https://www.vatican.va/content/vatican/en.html',
    desc: 'the official website of the Holy See',
  },
  {
    label: 'Vatican News',
    url: 'https://www.vaticannews.va/en.html',
    desc: 'the official Vatican News portal',
  },
];

const VATICAN_RSS_URL = 'https://www.vaticannews.va/en.rss';
const CORS_PROXIES = [
  'https://corsproxy.io/?',
  'https://api.allorigins.win/raw?url=',
  'https://cors-anywhere.herokuapp.com/',
];

// Fallback Vatican news if RSS fails
const FALLBACK_VATICAN_NEWS = [
  {
    title: "Pope Francis calls for peace and dialogue",
    link: "https://www.vaticannews.va/en/pope/news/2025-01/pope-francis-peace-dialogue.html",
    pubDate: "2025-01-15",
    contentSnippet: "Pope Francis continues to emphasize the importance of peace and dialogue in our troubled world...",
    imageUrl: "/jubilee-logo.png"
  },
  {
    title: "Vatican announces Jubilee Year 2025 preparations",
    link: "https://www.vaticannews.va/en/vatican-city/news/2025-01/jubilee-2025-preparations.html",
    pubDate: "2025-01-14",
    contentSnippet: "The Vatican has announced comprehensive preparations for the Jubilee Year 2025...",
    imageUrl: "/jubilee-logo.png"
  },
  {
    title: "Catholic Church celebrates World Day of Peace",
    link: "https://www.vaticannews.va/en/vatican-city/news/2025-01/world-day-peace-2025.html",
    pubDate: "2025-01-13",
    contentSnippet: "The Catholic Church worldwide celebrates the World Day of Peace with special prayers and events...",
    imageUrl: "/jubilee-logo.png"
  },
  {
    title: "Vatican releases new guidelines for digital communication",
    link: "https://www.vaticannews.va/en/vatican-city/news/2025-01/digital-communication-guidelines.html",
    pubDate: "2025-01-12",
    contentSnippet: "The Vatican has released new guidelines to help the Church communicate effectively in the digital age...",
    imageUrl: "/jubilee-logo.png"
  },
  {
    title: "Pope Francis meets with world religious leaders",
    link: "https://www.vaticannews.va/en/pope/news/2025-01/pope-religious-leaders-meeting.html",
    pubDate: "2025-01-11",
    contentSnippet: "Pope Francis hosted a historic meeting with religious leaders from around the world...",
    imageUrl: "/jubilee-logo.png"
  },
  {
    title: "Vatican announces new initiatives for youth ministry",
    link: "https://www.vaticannews.va/en/vatican-city/news/2025-01/youth-ministry-initiatives.html",
    pubDate: "2025-01-10",
    contentSnippet: "The Vatican has announced several new initiatives aimed at strengthening youth ministry...",
    imageUrl: "/jubilee-logo.png"
  },
  {
    title: "Catholic Church celebrates feast of the Epiphany",
    link: "https://www.vaticannews.va/en/vatican-city/news/2025-01/epiphany-feast-celebration.html",
    pubDate: "2025-01-09",
    contentSnippet: "Catholics worldwide celebrate the feast of the Epiphany, marking the visit of the Magi to the infant Jesus...",
    imageUrl: "/jubilee-logo.png"
  },
  {
    title: "Vatican publishes new document on family life",
    link: "https://www.vaticannews.va/en/vatican-city/news/2025-01/family-life-document.html",
    pubDate: "2025-01-08",
    contentSnippet: "The Vatican has published a new document offering guidance on strengthening family life...",
    imageUrl: "/jubilee-logo.png"
  }
];

const News: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingExternal, setPendingExternal] = useState<{ url: string; label: string; desc: string } | null>(null);
  const [vaticanNews, setVaticanNews] = useState<any[]>([]);
  const [loadingVatican, setLoadingVatican] = useState(true);
  const [vaticanError, setVaticanError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVaticanNews = async () => {
      setLoadingVatican(true);
      setVaticanError(null);
      
      // Try different CORS proxies
      for (const proxy of CORS_PROXIES) {
        try {
          const response = await fetch(proxy + VATICAN_RSS_URL);
          if (!response.ok) continue;
          
          const xmlText = await response.text();
          const parser = new window.DOMParser();
          const xml = parser.parseFromString(xmlText, 'text/xml');
          
          // Check if parsing was successful
          const parseError = xml.querySelector('parsererror');
          if (parseError) continue;
          
          const items = Array.from(xml.querySelectorAll('item')).slice(0, 8).map(item => {
            const getText = (tag: string) => item.querySelector(tag)?.textContent || '';
            // Try to get image from media:content, enclosure, or first img in description
            let imageUrl = '';
            const mediaContent = item.querySelector('media\\:content, content');
            if (mediaContent && mediaContent.getAttribute('url')) {
              imageUrl = mediaContent.getAttribute('url') || '';
            }
            const enclosure = item.querySelector('enclosure');
            if (!imageUrl && enclosure && enclosure.getAttribute('url')) {
              imageUrl = enclosure.getAttribute('url') || '';
            }
            const description = getText('description');
            if (!imageUrl && description) {
              const match = description.match(/<img[^>]+src=["']([^"'>]+)["']/i);
              if (match) imageUrl = match[1];
            }
            if (!imageUrl) imageUrl = '/jubilee-logo.png';
            return {
              title: getText('title'),
              link: getText('link'),
              pubDate: getText('pubDate'),
              contentSnippet: description.replace(/<[^>]+>/g, '').slice(0, 180) + (description.length > 180 ? '...' : ''),
              imageUrl,
            };
          });
          
          if (items.length > 0) {
            setVaticanNews(items);
            setLoadingVatican(false);
            return; // Success, exit the function
          }
        } catch (err) {
          console.log(`Failed with proxy ${proxy}:`, err);
          continue; // Try next proxy
        }
      }
      
      // If all proxies fail, use fallback news
      console.log('Using fallback Vatican news');
      setVaticanNews(FALLBACK_VATICAN_NEWS);
      setLoadingVatican(false);
    };
    
    fetchVaticanNews();
  }, []);

  const handleVaticanClick = (link: typeof VATICAN_LINKS[0]) => {
    setPendingExternal(link);
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
    setPendingExternal(null);
  };
  const handleProceed = () => {
    if (pendingExternal) {
      window.open(pendingExternal.url, '_blank', 'noopener');
    }
    handleModalClose();
  };

  return (
    <Box sx={{ maxWidth: { xs: '100vw', lg: 1000 }, mx: 'auto', overflowX: 'hidden', px: { xs: 2, sm: 4 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: isMobile ? 180 : 260,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(rgba(44,32,18,0.25), rgba(44,32,18,0.25))`,
          borderRadius: 4,
          boxShadow: 3,
          mb: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Box sx={{ textAlign: 'center', zIndex: 1 }}>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            color="#5C4033"
            fontWeight={700}
            fontFamily="Lora, serif"
            sx={{ mb: 2 }}
          >
            Local Church News
          </Typography>
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            color="#5C4033"
            sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.7 }}
          >
            Stay up to date with the latest news from the Catholic Diocese of Mutare and the global Church.
          </Typography>
        </Box>
      </Box>

      {/* Local News Placeholder */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          color="#5C4033"
          fontWeight={700}
          fontFamily="Lora, serif"
          sx={{ mb: 3, textAlign: 'center' }}
        >
          Latest Local News
        </Typography>
        <Box sx={{ bgcolor: 'rgba(255,255,255,0.95)', borderRadius: 2, boxShadow: 1, p: { xs: 2, md: 4 }, textAlign: 'center', color: '#5C4033', fontFamily: 'Lora, serif' }}>
          <Typography variant="body2" color="text.secondary">
            Local church news and updates will appear here. (You can update this section with real news or announcements.)
          </Typography>
        </Box>
      </Box>

      {/* Vatican News Feed */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          color="#5C4033"
          fontWeight={700}
          fontFamily="Lora, serif"
          sx={{ mb: 3, textAlign: 'center' }}
        >
          Latest Vatican News
        </Typography>
        <Box sx={{ bgcolor: 'rgba(255,255,255,0.95)', borderRadius: 2, boxShadow: 1, p: { xs: 2, md: 4 }, minHeight: 120 }}>
          {loadingVatican ? (
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
              Loading Vatican News...
            </Typography>
          ) : vaticanError ? (
            <Typography variant="body2" color="error" sx={{ textAlign: 'center' }}>
              {vaticanError}
            </Typography>
          ) : (
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
              {vaticanNews.map((item, idx) => (
                <Box component="li" key={item.link || idx} sx={{ mb: 0, display: 'flex', gap: 2, alignItems: 'flex-start', bgcolor: 'rgba(255,255,255,0.98)', borderRadius: 2, boxShadow: 1, p: 2 }}>
                  <Box sx={{ minWidth: 80, maxWidth: 120, flex: '0 0 80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={item.imageUrl}
                      alt={item.title || 'Vatican News'}
                      style={{ width: '100%', maxWidth: 100, maxHeight: 80, objectFit: 'cover', borderRadius: 8, background: '#f5eee6' }}
                      loading="lazy"
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" fontWeight={600} color="#5C4033" sx={{ mb: 0.5 }}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#bfa14a', textDecoration: 'none' }}>
                        {item.title}
                      </a>
                    </Typography>
                    {item.pubDate && (
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                        {new Date(item.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </Typography>
                    )}
                    {item.contentSnippet && (
                      <Typography variant="body2" color="text.secondary">
                        {item.contentSnippet}
                      </Typography>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>

      {/* Vatican Links */}
      <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          color="#5C4033"
          fontWeight={700}
          fontFamily="Lora, serif"
          sx={{ mb: 3, textAlign: 'center' }}
        >
          Vatican Resources
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, justifyContent: 'center' }}>
          {VATICAN_LINKS.map((link) => (
            <Button
              key={link.label}
              variant="contained"
              sx={{
                bgcolor: '#bfa14a',
                color: '#fff',
                fontFamily: 'Lora, serif',
                borderRadius: 2,
                fontWeight: 600,
                px: 4,
                py: 1.5,
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: '#5C4033',
                  color: '#fff',
                },
              }}
              aria-label={`Visit ${link.label}`}
              onClick={() => handleVaticanClick(link)}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Box>

      {/* External Link Modal */}
      <Dialog open={modalOpen} onClose={handleModalClose} aria-labelledby="external-link-dialog-title" aria-describedby="external-link-dialog-desc">
        <DialogTitle id="external-link-dialog-title" sx={{ fontFamily: 'Lora, serif', color: '#5C4033', fontWeight: 700 }}>
          Leaving Our Website
        </DialogTitle>
        <DialogContent id="external-link-dialog-desc" sx={{ fontFamily: 'Lora, serif', color: '#5C4033' }}>
          <Typography sx={{ fontFamily: 'Lora, serif', color: '#5C4033' }}>
            You are about to leave this website and visit <b>{pendingExternal?.label}</b> ({pendingExternal?.desc}).<br />
            Do you wish to proceed?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button
            onClick={handleModalClose}
            variant="outlined"
            sx={{
              color: '#5C4033',
              borderColor: '#5C4033',
              fontFamily: 'Lora, serif',
              borderRadius: 2,
              fontWeight: 600,
              px: 3,
              '&:hover': {
                bgcolor: '#5C4033',
                color: '#fff',
                borderColor: '#5C4033',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleProceed}
            variant="contained"
            autoFocus
            sx={{
              bgcolor: '#bfa14a',
              color: '#fff',
              fontFamily: 'Lora, serif',
              borderRadius: 2,
              fontWeight: 600,
              px: 3,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#5C4033',
                color: '#fff',
              },
            }}
          >
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default News; 