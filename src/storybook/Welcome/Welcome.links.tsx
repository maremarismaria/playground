import React from "react";

enum link {
  MariaMorales = "https://mariamorales.dev",
  GitHub = "https://github.com/maremarismaria",
  CRA = "https://create-react-app.dev/",
  TS = "https://www.typescriptlang.org/index.html",
  Storybook = "https://github.com/storybookjs/storybook"
}

const Link = ({ href, text }: { href: link; text?: string }) => (
  <a href={href} target={"_blank"} rel={"noopener noreferrer"}>
    {text ?? href}
  </a>
);

export const MariaMorales = () => <Link href={link.MariaMorales} text={"María Morales"} />;
export const Repo = () => <Link href={link.GitHub} text={"repo"} />;
export const CRA = () => <Link href={link.CRA} text={"Create React App"} />;
export const TypeScript = () => <Link href={link.TS} text={"TypeScript"} />;
export const Storybook = () => <Link href={link.Storybook} text={"Storybook"} />;

export default {
  MariaMorales,
  Repo,
  CRA,
  TypeScript,
  Storybook
};
