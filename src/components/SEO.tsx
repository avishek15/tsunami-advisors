import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    structuredData?: object;
    noindex?: boolean;
    nofollow?: boolean;
}

export default function SEO({
    title,
    description,
    keywords,
    canonical,
    ogImage = "/ta-logo.png",
    ogType = "website",
    twitterCard = "summary_large_image",
    structuredData,
    noindex = false,
    nofollow = false,
}: SEOProps) {
    const fullTitle = `${title} | Tsunami Advisors`;
    const siteUrl = "https://tsunamiadvisors.com"; // Update with your actual domain
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullCanonical} />

            {/* Robots Meta */}
            {noindex && <meta name="robots" content="noindex" />}
            {nofollow && <meta name="robots" content="nofollow" />}
            {!noindex && !nofollow && (
                <meta name="robots" content="index, follow" />
            )}

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:image:alt" content={title} />
            <meta property="og:site_name" content="Tsunami Advisors" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
            <meta name="twitter:image:alt" content={title} />

            {/* Additional Meta Tags */}
            <meta name="author" content="Tsunami Advisors" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="theme-color" content="#0604fb" />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
}
