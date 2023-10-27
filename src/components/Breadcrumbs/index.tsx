"use client";

import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  Breadcrumbs as RACBreadcrumbs,
  Link,
  RouterProvider,
} from "react-aria-components";

export type BreadcrumbsProps = {
  items: {
    label: string;
    href: string;
  }[];
};

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { items } = props;

  const router = useRouter();

  return (
    <RouterProvider navigate={router.push}>
      <RACBreadcrumbs>
        {items.map((item) => (
          <Breadcrumb key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </Breadcrumb>
        ))}
      </RACBreadcrumbs>
    </RouterProvider>
  );
}
