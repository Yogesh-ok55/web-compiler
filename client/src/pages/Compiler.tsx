import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";

import RenderCode from "@/components/RenderCode";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Compiler() {
  
 
  return (
    <ResizablePanelGroup
      direction={ "horizontal"}
      className="w-full !h-[calc(100vh-60px)]"
    >
      <ResizablePanel defaultSize={50} className="!h-[calc(100vh-60px)]">
        <HelperHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
