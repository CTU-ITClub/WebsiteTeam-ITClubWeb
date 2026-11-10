const CLOUD_NAME = "dcvuaqnah";

interface CloudinaryResource {
  public_id?: string;
  format?: string;
  version?: number;
}

/**
 * Fetch danh sách ảnh từ Cloudinary tag URL.
 * @param tagUrl - URL dạng https://res.cloudinary.com/.../image/list/<tag>.json
 * @param signal - AbortSignal để cancel request khi component unmount
 */
export async function fetchCloudinaryImageList(
  tagUrl: string,
  signal?: AbortSignal
): Promise<string[]> {
  const response = await fetch(tagUrl, { signal });

  if (!response.ok) {
    throw new Error(`Cloudinary request failed: ${response.status}`);
  }

  const data: { resources?: CloudinaryResource[] } = await response.json();

  return (data.resources ?? [])
    .map(({ public_id, format, version }) =>
      public_id
        ? `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${
            version ? `v${version}/` : ""
          }${public_id}${format ? `.${format}` : ""}`
        : ""
    )
    .filter((url): url is string => Boolean(url));
}

// --- Tag URLs ---
export const CLOUDINARY_TAGS = {
  heroSection:
    "https://res.cloudinary.com/dcvuaqnah/image/list/HomePage-HeroSection.json",
  introSection:
    "https://res.cloudinary.com/dcvuaqnah/image/list/HomePage-IntroSection.json",
  activitiesWorkshop:
    "https://res.cloudinary.com/dcvuaqnah/image/list/HomePage-ActivitiesSection-Workshops.json",
  activitiesGame:
    "https://res.cloudinary.com/dcvuaqnah/image/list/HomePage-ActivitiesSection-GameAndAdmission.json",
  activitiesExam:
    "https://res.cloudinary.com/dcvuaqnah/image/list/HomePage-ActivitiesSection-Competitions.json",
} as const;
