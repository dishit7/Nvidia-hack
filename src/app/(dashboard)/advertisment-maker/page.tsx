'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles, Download } from 'lucide-react';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setImageLoading(true);

    try {
      const url = `https://pollinations.ai/prompt/${encodeURIComponent(
        `Generate an image for an advertisement campaign of the business domain given: ${prompt}`
      )}`;
      setImageUrl(url);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      generateImage();
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const downloadImage = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `advertisement-${prompt.replace(/\s+/g, '-').toLowerCase()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 sm:p-8">
      <Card className="w-full max-w-2xl mx-auto shadow-xl">
        <CardHeader className="border-b bg-white/50 backdrop-blur-sm">
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            Advertisement Maker
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Enter your domain..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 h-12 px-4 text-lg border-2 focus:border-purple-500"
            />
            <Button
              onClick={generateImage}
              disabled={loading || !prompt.trim()}
              className="h-12 px-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold transition-all duration-200 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating
                </>
              ) : (
                'Generate Image'
              )}
            </Button>
          </div>

          {(imageUrl || imageLoading) && (
            <div className="relative">
              <div className="mt-6 relative aspect-square w-full max-w-xl mx-auto rounded-xl overflow-hidden bg-gray-100">
                {imageLoading && (
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 background-animate" />
                )}
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={prompt}
                    onLoad={handleImageLoad}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      imageLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                )}
              </div>
              
              {imageUrl && !imageLoading && (
                <div className="absolute top-8 right-2 z-10">
                  <Button
                    onClick={downloadImage}
                    className="bg-white/90 hover:bg-white text-purple-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-200"
                    title="Download Image"
                  >
                    <Download className="w-5 h-5" />
                  </Button>
                </div>
              )}
            </div>
          )}

          {imageUrl && (
            <p className="text-sm text-gray-500 text-center mt-2 italic">
              &quot;{prompt}&quot;
            </p>
          )}
        </CardContent>
      </Card>

      <style jsx global>{`
        .background-animate {
          background-size: 200% 200%;
          animation: shimmer 1.5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGenerator;