"use client";

import { useState } from "react";
import { Bold, ChevronDown, Italic, Underline } from "lucide-react";
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "@/siteplane/components/accordion";
import { Avatar, AvatarFallback } from "@/siteplane/components/avatar";
import { Badge } from "@/siteplane/components/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/siteplane/components/breadcrumb";
import { Button } from "@/siteplane/components/button";
import { Card, CardHeader, CardPanel, CardTitle } from "@/siteplane/components/card";
import { Checkbox } from "@/siteplane/components/checkbox";
import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@/siteplane/components/collapsible";
import { CopyButton } from "@/siteplane/components/copy-button";
import {
  DashboardShell,
  DashboardShellHeader,
  DashboardShellInset,
  DashboardShellMain,
  DashboardShellSidebar,
} from "@/siteplane/components/dashboard-shell";
import {
  DetailDrawer,
  DetailDrawerBody,
  DetailDrawerHeader,
  DetailDrawerPopup,
  DetailDrawerTitle,
  DetailDrawerTrigger,
} from "@/siteplane/components/detail-drawer";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/siteplane/components/dialog";
import {
  Drawer,
  DrawerDescription,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/siteplane/components/drawer";
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/siteplane/components/empty-state";
import { Field, FieldDescription, FieldLabel } from "@/siteplane/components/field";
import { Input } from "@/siteplane/components/input";
import { Kbd, KbdGroup } from "@/siteplane/components/kbd";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/siteplane/components/menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/siteplane/components/pagination";
import { Radio, RadioGroup } from "@/siteplane/components/radio-group";
import { ScrollArea } from "@/siteplane/components/scroll-area";
import { Separator } from "@/siteplane/components/separator";
import { Sheet, SheetHeader, SheetPanel, SheetPopup, SheetTitle, SheetTrigger } from "@/siteplane/components/sheet";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/siteplane/components/sidebar";
import { Skeleton } from "@/siteplane/components/skeleton";
import { Spinner } from "@/siteplane/components/spinner";
import { Switch } from "@/siteplane/components/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/siteplane/components/table";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/siteplane/components/tabs";
import { Textarea } from "@/siteplane/components/textarea";
import { Toggle } from "@/siteplane/components/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/siteplane/components/toggle-group";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/siteplane/components/tooltip";

const SECTIONS = [
  "Buttons",
  "Badges",
  "Navigation",
  "Forms",
  "Overlays",
  "Disclosure",
  "Data",
  "Feedback",
] as const;

function Demo({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <Card id={id} className="scroll-mt-24">
      <CardHeader>
        <CardTitle render={<h2 />}>{title}</CardTitle>
      </CardHeader>
      <CardPanel className="flex flex-wrap items-start gap-3">{children}</CardPanel>
    </Card>
  );
}

const ROWS = [
  { skill: "Spacing Rhythm", topic: "Layout", stars: "—" },
  { skill: "Web Design Guidelines", topic: "Visual", stars: "33.2K" },
  { skill: "Animate", topic: "Motion", stars: "94.9K" },
];

export function KitShowcase() {
  const [active, setActive] = useState<string>(SECTIONS[0]);
  const [notify, setNotify] = useState(true);

  return (
    // The transform makes the shell's fixed sidebar position against this box, not the viewport.
    <div className="relative overflow-hidden rounded-feature border border-line [transform:translateZ(0)]">
      <DashboardShell layout="inset" className="min-h-0!">
        <DashboardShellSidebar className="h-full!" collapsible="offcanvas">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Components</SidebarGroupLabel>
              <SidebarMenu>
                {SECTIONS.map((s) => (
                  <SidebarMenuItem key={s}>
                    <SidebarMenuButton
                      active={active === s}
                      onClick={() => setActive(s)}
                      render={<a href={`#${s.toLowerCase()}`} />}
                    >
                      {s}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </DashboardShellSidebar>

        <DashboardShellInset>
          <DashboardShellHeader>
            <SidebarTrigger aria-label="Toggle sidebar" size="icon-md" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/design-system">Design system</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{active}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </DashboardShellHeader>

          <DashboardShellMain className="grid gap-4">
            <Demo id="buttons" title="Buttons">
              <Button>Default</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
              <Button loading>Saving</Button>
              <Button shape="pill" size="sm" variant="outline">
                Pill
              </Button>
              <CopyButton value="npx skills add vercel-labs/agent-skills" variant="outline">
                Copy command
              </CopyButton>
              <Toggle aria-label="Bold">
                <Bold aria-hidden />
              </Toggle>
              <ToggleGroup aria-label="Text style" defaultValue={["italic"]} variant="outline">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold aria-hidden />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic aria-hidden />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline aria-hidden />
                </ToggleGroupItem>
              </ToggleGroup>
            </Demo>

            <Demo id="badges" title="Badges, avatars and keys">
              <Badge>Default</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Curated</Badge>
              <Badge variant="info">External</Badge>
              <Badge variant="warning">Beta</Badge>
              <Avatar>
                <AvatarFallback>UI</AvatarFallback>
              </Avatar>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </Demo>

            <Demo id="navigation" title="Navigation">
              <div className="w-full space-y-4">
                <Tabs defaultValue="claude">
                  <TabsList aria-label="Agent">
                    <TabsTab value="claude">Claude Code</TabsTab>
                    <TabsTab value="cursor">Cursor</TabsTab>
                    <TabsTab value="codex">Codex</TabsTab>
                  </TabsList>
                  <TabsPanel value="claude" className="mt-3 text-sm text-ink-2">Install prompts per agent use Tabs.</TabsPanel>
                  <TabsPanel value="cursor" className="mt-3 text-sm text-ink-2">Cursor panel.</TabsPanel>
                  <TabsPanel value="codex" className="mt-3 text-sm text-ink-2">Codex panel.</TabsPanel>
                </Tabs>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious render={<a href="#navigation" />} />
                    </PaginationItem>
                    {[1, 2, 3].map((n) => (
                      <PaginationItem key={n}>
                        <PaginationLink active={n === 2} render={<a href="#navigation" />}>
                          {n}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext render={<a href="#navigation" />} />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
                <Menu>
                  <MenuTrigger render={<Button variant="outline" />}>
                    Menu <ChevronDown aria-hidden />
                  </MenuTrigger>
                  <MenuPopup>
                    <MenuItem>Copy link</MenuItem>
                    <MenuItem>Open raw file</MenuItem>
                  </MenuPopup>
                </Menu>
              </div>
            </Demo>

            <Demo id="forms" title="Forms">
              <div className="grid w-full gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel>Repository</FieldLabel>
                  <Input placeholder="https://github.com/user/repo" />
                  <FieldDescription>Where the SKILL.md lives.</FieldDescription>
                </Field>
                <Field>
                  <FieldLabel>Description</FieldLabel>
                  <Textarea placeholder="What does this skill teach?" rows={3} />
                </Field>
                <Checkbox defaultChecked>Curated only</Checkbox>
                <Switch checked={notify} onCheckedChange={setNotify}>
                  Email me new skills
                </Switch>
                <RadioGroup aria-label="Sort" defaultValue="stars">
                  <Radio value="stars">Stars</Radio>
                  <Radio value="newest">Newest</Radio>
                </RadioGroup>
              </div>
            </Demo>

            <Demo id="overlays" title="Overlays">
              <Dialog>
                <DialogTrigger render={<Button variant="outline" />}>Dialog</DialogTrigger>
                <DialogPopup>
                  <DialogHeader>
                    <DialogTitle>Install skill</DialogTitle>
                    <DialogDescription>The ⌘K palette runs on this Dialog.</DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose render={<Button />}>Done</DialogClose>
                  </DialogFooter>
                </DialogPopup>
              </Dialog>
              <Sheet>
                <SheetTrigger render={<Button variant="outline" />}>Sheet</SheetTrigger>
                <SheetPopup side="left">
                  <SheetHeader>
                    <SheetTitle>Mobile menu</SheetTitle>
                  </SheetHeader>
                  <SheetPanel className="text-sm text-ink-2">The header uses this Sheet on phones.</SheetPanel>
                </SheetPopup>
              </Sheet>
              <Drawer>
                <DrawerTrigger render={<Button variant="outline" />}>Drawer</DrawerTrigger>
                <DrawerPopup>
                  <DrawerHeader>
                    <DrawerTitle>Drawer</DrawerTitle>
                    <DrawerDescription>Swipe or press Escape to close.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerPanel className="text-sm text-ink-2">Bottom drawer for touch-first flows.</DrawerPanel>
                </DrawerPopup>
              </Drawer>
              <DetailDrawer>
                <DetailDrawerTrigger render={<Button variant="outline" />}>Detail drawer</DetailDrawerTrigger>
                <DetailDrawerPopup>
                  <DetailDrawerHeader>
                    <DetailDrawerTitle>SKILL.md</DetailDrawerTitle>
                  </DetailDrawerHeader>
                  <DetailDrawerBody className="text-sm text-ink-2">
                    Skill pages open the raw SKILL.md in this drawer.
                  </DetailDrawerBody>
                </DetailDrawerPopup>
              </DetailDrawer>
              <Tooltip>
                <TooltipTrigger render={<Button variant="ghost" />}>Hover me</TooltipTrigger>
                <TooltipPopup>Tooltip</TooltipPopup>
              </Tooltip>
            </Demo>

            <Demo id="disclosure" title="Disclosure">
              <div className="w-full space-y-3">
                <Accordion>
                  <AccordionItem value="what">
                    <AccordionTrigger>What is a SKILL.md?</AccordionTrigger>
                    <AccordionPanel className="text-sm text-ink-2">
                      A Markdown file of instructions a coding agent loads for a task.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="where">
                    <AccordionTrigger>Where do skills live?</AccordionTrigger>
                    <AccordionPanel className="text-sm text-ink-2">In your agent&apos;s skills folder.</AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Collapsible>
                  <CollapsibleTrigger render={<Button variant="ghost" />}>
                    Collapsible <ChevronDown aria-hidden />
                  </CollapsibleTrigger>
                  <CollapsiblePanel className="pt-2 text-sm text-ink-2">
                    The mobile menu groups use Collapsible.
                  </CollapsiblePanel>
                </Collapsible>
              </div>
            </Demo>

            <Demo id="data" title="Data">
              <div className="w-full space-y-4">
                <Table aria-label="Skills">
                  <TableHeader>
                    <TableHead id="skill" isRowHeader>
                      Skill
                    </TableHead>
                    <TableHead id="topic">Topic</TableHead>
                    <TableHead id="stars" className="text-right">
                      Stars
                    </TableHead>
                  </TableHeader>
                  <TableBody>
                    {ROWS.map((r) => (
                      <TableRow key={r.skill} id={r.skill} textValue={r.skill}>
                        <TableCell>{r.skill}</TableCell>
                        <TableCell>{r.topic}</TableCell>
                        <TableCell className="text-right tabular-nums">{r.stars}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Separator />
                <ScrollArea className="h-28 rounded-card border border-line">
                  <ul className="p-3 text-sm text-ink-2">
                    {Array.from({ length: 12 }, (_, i) => (
                      <li key={i} className="py-1">
                        Scroll area row {i + 1}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </Demo>

            <Demo id="feedback" title="Feedback">
              <div className="grid w-full gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-20 w-full" />
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-2">
                  <Spinner /> Loading the catalog…
                </div>
                <Empty className="sm:col-span-2">
                  <EmptyHeader>
                    <EmptyTitle>No skills match</EmptyTitle>
                    <EmptyDescription>/skills shows this when filters return nothing.</EmptyDescription>
                  </EmptyHeader>
                </Empty>
              </div>
            </Demo>
          </DashboardShellMain>
        </DashboardShellInset>
      </DashboardShell>
    </div>
  );
}
