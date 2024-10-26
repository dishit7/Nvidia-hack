"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Image as ImageIcon, Loader2, RefreshCcw } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

//   const formatPrompt = (text) => {
//     return text.replace(/\s+/g, '_')
//   }

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt")
      return
    }

    setIsLoading(true)
    setError("")


    const generateImage = async () => {
        if (!prompt.trim()) {
          setError("Please enter a prompt")
          return
        }
    
        setIsLoading(true)
        setError("")
    
        try {

          console.log(prompt)
          // Construct the API URL with the formatted prompt
          const url=`https://pollinations.ai/api/create?prompt=${prompt}`
          console.log(url)
          const response = await fetch(`https://pollinations.ai/api/create?prompt=${prompt}`)
          
          if (!response.ok) {
            throw new Error("Failed to generate image")
          }
    
          const data = await response.json()
          setImageUrl(data.imageUrl) // Adjust based on actual API response structure
        } catch (err) {
          setError("Failed to generate image. Please try again.")
          console.error(err)
        } finally {
          setIsLoading(false)
        }
      }
    
    try {

    //   const formattedPrompt = formatPrompt(prompt)
    //   console.log(formatPrompt)
    console.log(prompt)
      const response = await fetch(`https://pollinations.ai/api/create ${prompt}`)
      if (!response.ok) {
        throw new Error("Failed to generate image")
      }

      const data = await response.json()
      setImageUrl(data.imageUrl) // Adjust based on actual API response structure
    } catch (err) {
      setError("Failed to generate image. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `generated-image-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      setError("Failed to download image")
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">AI Image Generator</h1>
          <p className="text-gray-500">Transform your ideas into stunning images using AI</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create Image</CardTitle>
            <CardDescription>
              Enter a detailed description of the image you want to generate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="E.g., A surreal digital garden with floating islands and bioluminescent plants..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={generateImage}
                disabled={isLoading || !prompt.trim()}
                className="md:w-32"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Generate
                  </>
                )}
              </Button>
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </CardContent>
        </Card>

        {imageUrl && (
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Generated Image
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <div className={cn(
                  "absolute inset-0 flex items-center justify-center",
                  isLoading ? "visible" : "hidden"
                )}>
                  <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                </div>
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Generated image"
                    className="w-full h-full object-cover"
                    onLoad={() => setIsLoading(false)}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {!imageUrl && !isLoading && (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <ImageIcon className="h-12 w-12 text-gray-400" />
              <p className="mt-4 text-sm text-gray-500">
                Your generated image will appear here
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
