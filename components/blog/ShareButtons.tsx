"use client";

import { Button } from "@heroui/button";
import { Facebook, Linkedin, Twitter, Share2 } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
}

export default function ShareButtons({ url, title, description }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || "");

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleShare = async (platform?: string) => {
    if (platform && shareLinks[platform as keyof typeof shareLinks]) {
      window.open(shareLinks[platform as keyof typeof shareLinks], "_blank", "width=600,height=400");
    } else if (typeof window !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button
        size="sm"
        variant="flat"
        color="primary"
        startContent={<Linkedin size={18} />}
        onPress={() => handleShare("linkedin")}
      >
        LinkedIn
      </Button>

      <Button
        size="sm"
        variant="flat"
        color="primary"
        startContent={<Facebook size={18} />}
        onPress={() => handleShare("facebook")}
      >
        Facebook
      </Button>

      <Button
        size="sm"
        variant="flat"
        color="primary"
        startContent={<Twitter size={18} />}
        onPress={() => handleShare("twitter")}
      >
        Twitter
      </Button>

      <Button
        size="sm"
        variant="flat"
        color="success"
        onPress={() => handleShare("whatsapp")}
      >
        WhatsApp
      </Button>

      {typeof window !== "undefined" && "share" in navigator && (
        <Button
          isIconOnly
          aria-label="Compartir"
          size="sm"
          startContent={<Share2 size={18} />}
          variant="flat"
          onPress={() => handleShare()}
        />
      )}
    </div>
  );
}
