import { PortfolioConfig } from '@/types/portfolio';
import portfolioData from '@/config/portfolio.json';

export function getPortfolioConfig(): PortfolioConfig {
  return portfolioData as PortfolioConfig;
}
