export type SocialNetworkItem = {
  name: string,
  url: string,
  iconUrl: string,
};

export type SocialNetworksProps = {
  items: Array<SocialNetworkItem>,
};
