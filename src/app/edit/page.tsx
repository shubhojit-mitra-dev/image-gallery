"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { useState, Suspense } from "react";
import { useSearchParams as useNextSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp, Image, Wand2 } from "lucide-react";

// Create a component that uses searchParams
function EditPageContent() {
  const searchParams = useNextSearchParams();
  const publicId = searchParams.get("publicId") || "";
  
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "bg-remove"
  >();

  const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");
  const [controlsVisible, setControlsVisible] = useState(true);

  const toggleControls = () => {
    setControlsVisible(!controlsVisible);
  };

  return (
    <section className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-4xl font-bold truncate">
            Edit <span className="text-muted-foreground">{publicId}</span>
          </h1>
          
          <Button 
            variant="outline" 
            className="md:hidden flex items-center gap-2"
            onClick={toggleControls}
          >
            {controlsVisible ? (
              <>Hide Controls <ChevronUp size={16} /></>
            ) : (
              <>Show Controls <ChevronDown size={16} /></>
            )}
          </Button>
        </div>

        <div className={`transition-all duration-300 ${controlsVisible ? 'max-h-[1000px]' : 'max-h-0 overflow-hidden md:max-h-[1000px]'}`}>
          <Card className="p-4">
            <Tabs defaultValue="transform" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="transform" className="flex items-center gap-2">
                  <Wand2 size={16} /> Transformations
                </TabsTrigger>
                <TabsTrigger value="fill" className="flex items-center gap-2">
                  <Image size={16} /> Generative Fill
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="transform" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setTransformation(undefined)}
                    className={!transformation ? "border-primary" : ""}
                  >
                    Original
                  </Button>
                  <Button 
                    onClick={() => setTransformation("blur")}
                    className={transformation === "blur" ? "bg-primary/90" : ""}
                  >
                    Blur
                  </Button>
                  <Button 
                    onClick={() => setTransformation("grayscale")}
                    className={transformation === "grayscale" ? "bg-primary/90" : ""}
                  >
                    Grayscale
                  </Button>
                  <Button 
                    onClick={() => setTransformation("pixelate")}
                    className={transformation === "pixelate" ? "bg-primary/90" : ""}
                  >
                    Pixelate
                  </Button>
                  <Button 
                    onClick={() => setTransformation("bg-remove")}
                    className={`${transformation === "bg-remove" ? "bg-primary/90" : ""}`}
                  >
                    Remove Background
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="fill" className="mt-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="prompt">AI Generation Prompt</Label>
                    <div className="flex gap-2">
                      <Input
                        id="prompt"
                        placeholder="Describe what to fill with..."
                        value={pendingPrompt}
                        onChange={(e) => setPendingPrompt(e.currentTarget.value)}
                        className="flex-1"
                      />
                      <Button
                        onClick={() => {
                          setTransformation("generative-fill");
                          setPrompt(pendingPrompt);
                        }}
                        className={transformation === "generative-fill" ? "bg-primary/90" : ""}
                        disabled={!pendingPrompt.trim()}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <Card className="p-4 flex flex-col gap-2">
            <h2 className="text-lg font-medium">Original</h2>
            <div className="flex justify-center">
              <CldImage 
                src={publicId} 
                width="400" 
                height="300" 
                alt="Original image" 
                className="max-w-full h-auto object-contain"
              />
            </div>
          </Card>

          <Card className="p-4 flex flex-col gap-2">
            <h2 className="text-lg font-medium">
              {transformation ? 
                `Transformed (${transformation})` : 
                "Transformed (Select a transformation)"}
            </h2>
            <div className="flex justify-center">
              {transformation === "generative-fill" ? (
                <CldImage
                  src={publicId}
                  width="1400"
                  height="900"
                  alt="Transformed image with generative fill"
                  crop="pad"
                  fillBackground={{
                    prompt,
                  }}
                  className="max-w-full h-auto object-contain"
                />
              ) : transformation === "blur" ? (
                <CldImage
                  src={publicId}
                  width="1200"
                  height="1400"
                  blur="800"
                  alt="Blurred image"
                  className="max-w-full h-auto object-contain"
                />
              ) : transformation === "grayscale" ? (
                <CldImage
                  src={publicId}
                  width="1200"
                  height="1400"
                  grayscale
                  alt="Grayscale image"
                  className="max-w-full h-auto object-contain"
                />
              ) : transformation === "pixelate" ? (
                <CldImage
                  src={publicId}
                  width="1200"
                  height="1400"
                  pixelate
                  alt="Pixelated image"
                  className="max-w-full h-auto object-contain"
                />
              ) : transformation === "bg-remove" ? (
                <CldImage
                  src={publicId}
                  width="1200"
                  height="700"
                  removeBackground
                  alt="Image with background removed"
                  className="max-w-full h-auto object-contain"
                />
              ) : (
                <div className="flex items-center justify-center h-full min-h-[200px] text-muted-foreground">
                  Select a transformation to see the result
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Main page component with Suspense boundary
export default function EditPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPageContent />
    </Suspense>
  );
}