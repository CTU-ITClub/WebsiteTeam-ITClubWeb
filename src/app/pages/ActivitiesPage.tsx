import WorkshopPage from "./WorkshopPage";

interface ActivitiesPageProps {
  isDark: boolean;
}

export default function ActivitiesPage({ isDark }: ActivitiesPageProps) {
  return <WorkshopPage isDark={isDark} />;
}
