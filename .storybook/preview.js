import { addParameters } from "@storybook/react";

addParameters({
  options: {
    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#storysort-option
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
});
