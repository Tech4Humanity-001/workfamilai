import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, GraduationCap } from "lucide-react";

const modules = [
  ["01", "AI augmentation, not AI replacement", "Understand augmentation as a practical way to increase human capability, judgement and capacity."],
  ["02", "Your AI operating environment", "Map the people, information, tools, permissions and routines that make up your working environment."],
  ["03", "Find the work worth augmenting", "Identify repetitive, cognitive and coordination-heavy work where AI can create immediate leverage."],
  ["04", "Prompting and delegation", "Move from asking AI questions to giving clear outcomes, context, constraints and acceptance criteria."],
  ["05", "Assistants, agents and workflows", "Learn the difference between chat, reusable workflows and agents that can act within defined authority."],
  ["06", "Build your first augmentation workflow", "Turn one real task into a repeatable human-AI workflow with a measurable outcome."],
  ["07", "Family and life coordination", "Apply the same principles to planning, information management, household coordination and personal administration."],
  ["08", "Privacy, consent and authority", "Know what AI should access, what it should not access, and where human approval remains essential."],
  ["09", "Evidence and human judgement", "Check outputs, preserve evidence and keep people accountable for consequential decisions."],
  ["10", "Your 30-day augmentation plan", "Choose the next capabilities to build and create a practical path from experimentation to adoption."]
];

export default function WorkFamilyAICourse() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,.10),transparent_35%)]" />
        <div className="relative container mx-auto max-w-6xl px-4 py-20">
          <Badge className="mb-6 border-cyan-500/30 bg-cyan-500/10 text-cyan-300">WORKFAMILY.AI • FREE COURSE</Badge>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">AI for Work & Family</h1>
            <p className="mt-5 text-2xl font-semibold text-orange-300 md:text-3xl">Your First Augmented Life</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A practical introduction to human-centred AI augmentation. Learn how to use AI to increase capability without handing away judgement, authority or responsibility.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge variant="outline" className="border-slate-600 text-slate-200">10 modules</Badge>
              <Badge variant="outline" className="border-slate-600 text-slate-200">Beginner</Badge>
              <Badge variant="outline" className="border-slate-600 text-slate-200">Free</Badge>
              <Badge variant="outline" className="border-slate-600 text-slate-200">WorkFamilyAI / Augmented Humanity</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-14">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div><h2 className="text-3xl font-bold">The course</h2><p className="mt-2 text-slate-400">Start with capability, then build toward useful action.</p></div>
          <GraduationCap className="hidden h-10 w-10 text-cyan-400 md:block" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {modules.map(([number, title, description]) => (
            <Card key={number} className="border-slate-700 bg-slate-800/50">
              <CardHeader><div className="flex gap-4"><span className="font-mono text-cyan-400">{number}</span><CardTitle className="text-white">{title}</CardTitle></div></CardHeader>
              <CardContent><p className="text-slate-300">{description}</p></CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/70">
        <div className="container mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">What you leave with</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {[
              "A clearer model of where AI belongs in your work and life",
              "One real AI workflow you can use and improve",
              "A practical approach to privacy, consent and authority",
              "A 30-day plan for moving from experimentation to adoption"
            ].map(item => <div key={item} className="flex gap-3 text-slate-200"><CheckCircle className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />{item}</div>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/free-courses"><Button variant="outline" className="border-slate-600">Back to Free Courses</Button></Link>
            <Link to="/work-packages"><Button className="bg-gradient-to-r from-cyan-500 to-blue-600">Take the next step <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
