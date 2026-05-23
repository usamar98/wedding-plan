"use client";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import type { PortfolioEvent } from "@/types";

type EventStoryModalProps = {
  event: PortfolioEvent | null;
  onClose: () => void;
};

export function EventStoryModal({ event, onClose }: EventStoryModalProps) {
  return (
    <Modal open={Boolean(event)} onClose={onClose} title={event?.title ?? ""} size="wide">
      {event ? (
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="image-frame aspect-[4/5]">
            <img src={event.image} alt={`${event.title} cover`} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span key={tag} className="border border-mutedGold/25 px-3 py-2 text-xs text-sand">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-7 grid gap-5">
              <StoryDetail label="Event concept" text={event.concept} />
              <StoryDetail label="Planning scope" text={event.planningScope} />
              <StoryDetail label="Design direction" text={event.designDirection} />
              <StoryDetail label="Guest experience" text={event.guestExperience} />
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {event.gallery.map((image, index) => (
                <div key={image} className="image-frame aspect-[3/4]">
                  <img src={image} alt={`${event.title} gallery ${index + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <Button
              type="button"
              className="mt-8"
              onClick={() => {
                onClose();
                document.querySelector("#inquiry")?.scrollIntoView();
              }}
            >
              Request a Similar Story
            </Button>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}

function StoryDetail({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-b border-mutedGold/18 pb-4">
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-mutedGold">
        {label}
      </p>
      <p className="copy mt-2">{text}</p>
    </div>
  );
}
