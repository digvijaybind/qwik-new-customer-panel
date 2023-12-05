import {useTranslation} from "next-i18next";
import NextHead from "next/head";
export function Head({
  title,
  description,
  children,
  hideOGDescription,
  hideOgTitle,
}) {
  return (
    <NextHead>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {!hideOGDescription && description && (
        <meta property="og:description" content={description} />
      )}
      {!hideOgTitle && title && <meta property="og:title" content={title} />}
      {children && children}
    </NextHead>
  );
}

export default Head;
