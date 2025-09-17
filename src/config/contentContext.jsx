// src/config/contentContext.jsx
import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useLocale } from "./localeContext";
import constantsExport from "./constants";

const API_PATH = constantsExport.API_PATH;

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const { locale } = useLocale();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await axios.get(`${API_PATH}/api/homepage?locale=${locale}&populate=*`);
        setContent(res.data.data);
      } catch (err) {
        console.error("Error fetching content:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we have a locale
    if (locale) {
      fetchContent();
    }
  }, [locale]); // Re-fetch when locale changes

  const value = {
    content,
    loading,
    error,
    refetch: () => {
      if (locale) {
        const fetchContent = async () => {
          try {
            setLoading(true);
            setError(null);
            
            const res = await axios.get(`${API_PATH}/api/homepage?locale=${locale}&populate=*`);
            setContent(res.data.data);
          } catch (err) {
            console.error("Error fetching content:", err);
            setError(err);
          } finally {
            setLoading(false);
          }
        };
        fetchContent();
      }
    }
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};