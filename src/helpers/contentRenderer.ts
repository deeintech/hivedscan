import { DefaultRenderer } from "steem-content-renderer";

const renderer = new DefaultRenderer({
  baseUrl: "https://peakd.com/",
  breaks: true,
  skipSanitization: false,
  allowInsecureScriptTags: false,
  addNofollowToLinks: true,
  doNotShowImages: false,
  ipfsPrefix: "",
  assetsWidth: 640,
  assetsHeight: 480,
  imageProxyFn: (url: string) => url,
  usertagUrlFn: (account: string) => "/@" + account,
  hashtagUrlFn: (hashtag: string) => "/trending/" + hashtag,
  isLinkSafeFn: () => true,
});

export default renderer;