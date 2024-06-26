import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GeneralSettings from "./GeneralSettings";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function Settings() {
    const tabs = [
        {
            label: "General",
            value: "general",
            component: <GeneralSettings/>
        },
        {
            label: "Security",
            value: "security",
            component: <></>
        },
        {
            label: "Integrations",
            value: "integrations",
            component: <></>
        },
        {
            label: "Support",
            value: "support",
            component: <></>
        },
        {
            label: "Organisations",
            value: "organisations",
            component: <></>
        },
        {
            label: "Advanced",
            value: "advanced",
            component: <></>
        },
    ];
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
    <Tabs defaultValue="general">
      <div className="flex items-center">
        <TabsList>
        {tabs.map((tab)=>{
            return(
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              )
             })}
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </div>
      </div>
      {tabs.map((tab) =>{
        return(
          <TabsContent className="w-full" value={tab.value} key={tab.value}>
            {tab.component}
          </TabsContent>
        );
              })} 
    </Tabs>
  </main>
  )
}
