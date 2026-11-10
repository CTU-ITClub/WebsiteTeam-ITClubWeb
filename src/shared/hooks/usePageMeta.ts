import { useEffect } from "react";

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;

    document.title = `${title} | IT Club CICT`;

    const descriptionTag = meta ?? document.createElement("meta");
    descriptionTag.name = "description";
    descriptionTag.content = description;
    if (!meta) document.head.appendChild(descriptionTag);

    return () => {
      document.title = previousTitle;
      if (previousDescription !== undefined) {
        descriptionTag.content = previousDescription;
      }
    };
  }, [description, title]);
}
