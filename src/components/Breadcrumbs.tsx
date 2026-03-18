import Link from 'next/link';
import { SITE_URL } from '@/lib/services';

interface BreadcrumbsProps {
  serviceName: string;
  slug: string;
}

export default function Breadcrumbs({ serviceName, slug }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: serviceName,
        item: `${SITE_URL}/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="max-w-[1080px] mx-auto px-6 pt-4 pb-2"
      >
        <ol className="flex items-center gap-1.5 text-[12px] text-[#8A8A9A] font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-[#1B3A6B] transition-colors"
            >
              Início
            </Link>
          </li>
          <li aria-hidden="true">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </li>
          <li>
            <span className="text-[#1B3A6B] font-semibold" aria-current="page">
              {serviceName}
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
}
