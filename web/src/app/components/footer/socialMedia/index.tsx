import { ISocialMediaFooter } from '@/sanity/lib/types/types';

const SocialMediaFooterComponent = ({ socialMedias }: { socialMedias: ISocialMediaFooter }) => {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold">Sosiale Medier</h2>

      {socialMedias.map(({ _key, platform, url }) => (
        <div key={_key} className="mb-2">
          <div className="flex items-center gap-3">
            <a href={url}>{platform}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaFooterComponent;
