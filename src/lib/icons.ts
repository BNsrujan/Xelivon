import {
  Clapperboard,
  Code2,
  Cog,
  Eye,
  Lightbulb,
  Megaphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/**
 * Services store an icon *name* in the database. Bundlers cannot tree-shake a
 * dynamic lookup into lucide-react, so the supported set is explicit here.
 */
const ICONS: Record<string, LucideIcon> = {
  Clapperboard,
  Code2,
  Cog,
  Eye,
  Lightbulb,
  Megaphone,
  Sparkles,
};

export function iconFor(name: string): LucideIcon {
  return ICONS[name] ?? Sparkles;
}
