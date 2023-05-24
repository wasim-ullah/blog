import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex mb-5 md:mb-10 items-center">
      <Logo />

      <nav className="font-mono text-xs grow justify-end items-center flex gap-1 md:gap-3">
        <ThemeToggle />

        <Link
          href="/about"
          className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
        >
          About
        </Link>
        <a
          href="https://mirror.xyz/0x3Bf0fA899C6b5d1875B10C219d2695ACc661EB94"
          target="_blank"
          className="inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] items-center p-2 rounded-sm transition-[background-color] whitespace-nowrap -mr-2"
        >
          <TweetIcon style={{ marginRight: 4 }} />
          Mirror{" "}
        </a>
      </nav>
    </header>
  );
}

function TweetIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
        d="M0 2000 l0 -2000 2000 0 2000 0 0 2000 0 2000 -2000 0 -2000 0 0
        -2000z m2170 1496 c273 -44 522 -204 672 -433 100 -150 147 -280 168 -463 14
        -122 11 -1733 -4 -1762 -8 -17 -66 -18 -1012 -18 l-1004 0 0 793 c0 847 4
        1017 26 1017 17 0 34 32 34 64 0 30 -17 43 -23 19 -3 -11 -5 -8 -6 10 0 15 4
        27 10 27 5 0 8 4 4 9 -8 14 29 103 40 94 4 -4 5 -3 2 3 -8 14 17 79 34 89 5 4
        8 13 5 21 -3 8 -2 14 3 14 5 0 11 10 15 23 5 19 8 20 17 7 9 -13 10 -12 5 3
        -4 11 4 31 19 51 14 18 25 36 25 40 0 4 9 17 20 29 l21 22 6 -23 c7 -27 19
        -29 26 -3 3 14 1 18 -9 14 -23 -8 -12 21 22 66 2 2 10 -2 19 -9 10 -8 15 -9
        15 -1 0 6 -6 11 -12 11 -34 1 154 145 258 198 171 87 403 121 604 88z"
      />
    </svg>
  );
}
