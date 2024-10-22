import { ISocialMediaFooterBlock } from '@/sanity/lib/types/types';

const SocialMediaFooterBlockComponent = ({ facebook, instagram }: ISocialMediaFooterBlock) => {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold">Sosiale Medier</h2>
      <div className="flex flex-col gap-3">
        <a href={facebook} target="_blank">
          Facebook
        </a>
        <a href={instagram} target="_blank">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default SocialMediaFooterBlockComponent;
