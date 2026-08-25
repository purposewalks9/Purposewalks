"use client";

import { useState } from "react";
import { Send, Mail } from "lucide-react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="max-w-2xl p-8 md:p-12 lg:p-20 relative text-left overflow-hidden mx-auto min-h-screen flex flex-col justify-center items-start gap-y-8">
      <Fade direction="up" delay={200} duration={1200} triggerOnce>
        <div className="w-full flex flex-row justify-between items-start pb-4 gap-x-40">
          <div className="flex flex-col text-left w-full gap-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Purpose
            </h1>
            <p className="text-sm sm:text-base font-medium w-full text-muted-foreground">
              Full-stack, Engineer
            </p>
          </div>

          <div className="relative flex flex-row gap-1 justify-center items-center p-2 shrink-0">
            <div className="flex flex-row gap-x-3 sm:gap-x-4 text-sm items-center">
              <a
                href="https://discord.com/users/zzxx__x"
                className="transition-transform hover:scale-110"
                style={{ color: "#5865F2" }}
              >
                <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a href="https://github.com/purposewalks9" className="transition-transform hover:scale-110 text-foreground">
                <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.62-5.48 5.92.43.372.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a href="https://x.com/purpose_walker" className="transition-transform hover:scale-110 text-foreground">
                <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Fade>

      <Fade direction="up" delay={350} duration={1200} triggerOnce>
        <div className="flex flex-col gap-y-5">
          <p className="text-base sm:text-lg leading-loose tracking-wide text-muted-foreground">
            I&apos;m a <span className="font-bold text-foreground">builder</span> who cares deeply
            about <span className="font-bold text-foreground">craft, systems</span>, and the{" "}
            <span className="italic font-medium" style={{ color: "#EA6D00", fontFamily: "cursive" }}>
              little details
            </span>{" "}
            that make software feel <span className="font-bold text-foreground">right</span>.
            <br />
            I&apos;m building{" "}
            <Link
              href="https://runic-labs.lol"

              className="underline font-medium text-foreground"
            >
              @runic
            </Link>
            , and I spend most of my time blending engineering, design and experimentation to make
            the{" "}
            <Link href="/craft" className="underline font-medium text-foreground">
              internet
            </Link>{" "}
            a little better.
          </p>

          <div className="flex flex-row gap-3">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => copyToClipboard("purposeekwealor@gmail.com", "email")}
            >
              <Mail size={14} />
              {copiedId === "email" ? "Copied!" : "Copy Email"}
            </Button>
          </div>
        </div>
      </Fade>
    </div>
  );
}
