export interface PortfolioCardProps {
  type: string;
  imageSrc: string;
  title: string;
  openModal?: (type: string) => void;
}