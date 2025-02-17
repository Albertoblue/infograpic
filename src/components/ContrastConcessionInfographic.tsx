import React, { useState } from 'react';
import { ChevronRight, BookOpen, Lightbulb, PenTool, BookText, Info } from 'lucide-react';

const ContrastConcessionInfographic = () => {
  const [activeSection, setActiveSection] = useState('intro');

  
  const sections = {
    intro: {
      title: "Understanding Contrast & Concession",
      content: (
        <div className="space-y-4">
          <p className="text-lg">When writing in English, we often need to show how ideas are different (contrast) or accept opposing views (concession). Let's learn how!</p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setActiveSection('theory')} 
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Info className="w-4 h-4" /> Learn the Theory
            </button>
            <button 
              onClick={() => setActiveSection('contrast')} 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <ChevronRight className="w-4 h-4" /> Explore Contrast
            </button>
            <button 
              onClick={() => setActiveSection('concession')} 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <ChevronRight className="w-4 h-4" /> Explore Concession
            </button>
            <button 
              onClick={() => setActiveSection('references')} 
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              <BookText className="w-4 h-4" /> View References
            </button>
          </div>
        </div>
      )
    },
    theory: {
      title: "Introduction to Contrast & Concession",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-xl mb-4">Why Are They Important?</h3>
            <p className="mb-4">In academic and professional writing, we often need to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Compare different ideas or viewpoints</li>
              <li>Show relationships between opposing concepts</li>
              <li>Acknowledge contradicting evidence</li>
              <li>Present balanced arguments</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Contrast</h3>
              <p>Contrast markers help us show differences between ideas. They're used to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Compare different viewpoints</li>
                <li>Highlight differences</li>
                <li>Present alternatives</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Concession</h3>
              <p>Concession markers help us acknowledge opposing views. They're used to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Accept contrary points</li>
                <li>Show understanding of alternatives</li>
                <li>Build balanced arguments</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Key Differences</h3>
            <div className="overflow-x-auto">
              <table className="w-full mt-2">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Contrast</th>
                    <th className="px-4 py-2 text-left">Concession</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">Shows differences between ideas</td>
                    <td className="px-4 py-2">Acknowledges opposing views</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Compares two or more elements</td>
                    <td className="px-4 py-2">Accepts contrary evidence</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Uses markers like "but," "while"</td>
                    <td className="px-4 py-2">Uses markers like "although," "despite"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => setActiveSection('contrast')} 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <ChevronRight className="w-4 h-4" /> Explore Contrast Markers
            </button>
            <button 
              onClick={() => setActiveSection('concession')} 
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              <ChevronRight className="w-4 h-4" /> Explore Concession Markers
            </button>
          </div>
        </div>
      )
    },
    contrast: {
      title: "Contrast Markers",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Common Contrast Words:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>but</li>
              <li>however</li>
              <li>on the other hand</li>
              <li>in contrast</li>
              <li>while</li>
              <li>whereas</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Examples:</h3>
            <p className="mb-2">✓ Sarah loves summer, <span className="font-bold text-blue-600">but</span> Tom prefers winter.</p>
            <p className="mb-2">✓ <span className="font-bold text-blue-600">While</span> some people enjoy city life, others prefer living in the countryside.</p>
            <p className="mb-2">✓ The morning was cold; <span className="font-bold text-blue-600">however</span>, it warmed up by noon.</p>
          </div>

          <button 
            onClick={() => setActiveSection('practice')} 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <PenTool className="w-4 h-4" /> Try Practice Examples
          </button>
        </div>
      )
    },
    concession: {
      title: "Concession Markers",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Common Concession Words:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>although / even though</li>
              <li>despite / in spite of</li>
              <li>nevertheless</li>
              <li>yet</li>
              <li>still</li>
              <li>nonetheless</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Examples:</h3>
            <p className="mb-2">✓ <span className="font-bold text-purple-600">Although</span> it was raining, we enjoyed our picnic.</p>
            <p className="mb-2">✓ <span className="font-bold text-purple-600">Despite</span> the traffic, we arrived on time.</p>
            <p className="mb-2">✓ The task was difficult; <span className="font-bold text-purple-600">nevertheless</span>, we completed it successfully.</p>
          </div>

          <button 
            onClick={() => setActiveSection('tips')} 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Lightbulb className="w-4 h-4" /> View Writing Tips
          </button>
        </div>
      )
    },
    practice: {
      title: "Practice Examples",
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Complete these sentences:</h3>
            <p className="mb-2">1. The movie was long, ________ it was interesting.</p>
            <p className="mb-2">2. ________ the high price, many people bought the new phone.</p>
            <p className="mb-2">3. Some prefer tea, ________ others like coffee.</p>
            <p className="mb-2">4. ________ he studied hard, he didn't pass the exam.</p>
            <p className="mb-2">5. The weather was cold, ________, we went to the beach.</p>
          </div>
          
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold mb-2">Possible Answers:</h3>
            <p>1. but / however / nevertheless</p>
            <p>2. Despite / In spite of</p>
            <p>3. while / whereas</p>
            <p>4. Although / Even though</p>
            <p>5. however / nevertheless / nonetheless</p>
          </div>

          <button 
            onClick={() => setActiveSection('tips')} 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <BookOpen className="w-4 h-4" /> Learn More Tips
          </button>
        </div>
      )
    },
    tips: {
      title: "Writing Tips",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Tips for Better Writing:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use a variety of contrast and concession markers to make your writing more interesting</li>
              <li>Pay attention to punctuation - especially with words like 'however' and 'nevertheless'</li>
              <li>Remember that 'despite' is followed by a noun/gerund, while 'although' is followed by a clause</li>
              <li>Don't overuse these markers - choose the most appropriate one for your meaning</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => setActiveSection('intro')} 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <ChevronRight className="w-4 h-4" /> Start Over
            </button>
            <button 
              onClick={() => setActiveSection('references')} 
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              <BookText className="w-4 h-4" /> View References
            </button>
          </div>
        </div>
      )
    },
    references: {
      title: "References",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Academic References</h3>
            <div className="space-y-4 text-sm">
              <p className="pl-8 -indent-8">Abdssalami, M. (2017). Expressing concession & contrast For 2 Bac. <span className="italic">Academia.edu</span>. https://www.academia.edu/35855223/Expressing_concession_and_contrast_For_2_Bac</p>
              
              <p className="pl-8 -indent-8">British Council. (n.d.). A for and against essay about communication. <span className="italic">Learn English Teens</span>. https://learnenglishteens.britishcouncil.org/skills/writing/c1-writing/against-essay-about-online-communication</p>
              
              <p className="pl-8 -indent-8">Carter, R., & McCarthy, M. (2006). <span className="italic">Cambridge grammar of English: A comprehensive guide</span>. Cambridge University Press.</p>
            </div>
          </div>

          <button 
            onClick={() => setActiveSection('intro')} 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <ChevronRight className="w-4 h-4" /> Return to Main Content
          </button>
        </div>
      )
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-xl">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">{sections[activeSection].title}</h2>
          {sections[activeSection].content}
        </div>
      </div>

      <div className="mt-8 p-4 border-t border-gray-200 text-center text-gray-600">
          <p>Elaborado para el entregable 1 de la materia de Comunicación Avanzada en Inglés</p>
          <p className="font-semibold mt-1">Juan Alberto Alcantara Sotelo</p>
      </div>
      
    </div>
  );
};

export default ContrastConcessionInfographic;