import { buildMeta } from "@/_global/lib/meta";
import type { YamlFiles, MetaProps } from "@/_global/lib/meta";

const globData = import.meta.glob('../**/_data/meta.yaml', { eager: true }) as YamlFiles;
export const buildSiteMeta = (props?: MetaProps) => {
	return buildMeta({ ...props ?? {}, globData })
};
