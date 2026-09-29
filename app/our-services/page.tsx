import { ourServicesMetadata } from '../../metadata/ourServicesMetadata.js';
import OurServicesPage from './ourServicesPage';

export const metadata = ourServicesMetadata;

export default function Page() {
  return <OurServicesPage />;
}