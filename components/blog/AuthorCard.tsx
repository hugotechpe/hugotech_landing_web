import Image from "next/image";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Linkedin, Twitter, Globe } from "lucide-react";
import { Author } from "@/types/sanity";
import { urlFor } from "@/lib/sanity.image";

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const imageUrl = author.image ? urlFor(author.image).width(100).height(100).url() : "";

  return (
    <Card className="bg-default-100">
      <CardBody className="gap-4 p-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          {imageUrl && (
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full">
              <Image
                src={imageUrl}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">{author.name}</h3>
            {author.role && (
              <p className="text-sm text-default-500">{author.role}</p>
            )}
            {author.bio && (
              <p className="mt-3 text-sm text-default-600">{author.bio}</p>
            )}

            {author.social && (
              <div className="mt-4 flex justify-center gap-2 sm:justify-start">
                {author.social.linkedin && (
                  <Button
                    as="a"
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    variant="flat"
                    isIconOnly
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </Button>
                )}
                {author.social.twitter && (
                  <Button
                    as="a"
                    href={author.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    variant="flat"
                    isIconOnly
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </Button>
                )}
                {author.social.website && (
                  <Button
                    as="a"
                    href={author.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    variant="flat"
                    isIconOnly
                    aria-label="Website"
                  >
                    <Globe size={18} />
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
