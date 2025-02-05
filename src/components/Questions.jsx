import  { useState } from 'react';

// SVGs for plus and minus signs
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m-7-7h14"/>
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"/>
  </svg>
);

const faqs = [
  {
    id: 1,
    question: "What are the perks of participating in UNNATI?",
    answer: "You get to compete with the best young minds of AIT, a 48-hour event with amazing problem statements and prizes! Goodies and Swags. Cmon, still need more?"
  },
  {
    id: 2,
    question: "Is there any registration fee to attend UNNATI?",
    answer: "NO, it's FREE! Just bring your team members along."
  },
  {
    id: 3,
    question: "Is UNNATI online or offline?",
    answer: "Both the rounds of UNNATI are offline."
  },
  {
    id: 4,
    question: "Any specific qualifications to be a participant?",
    answer: "You love to speak, ideate or work in groups, then you are more than welcome to participate in the Event."
  },
  {
    id: 5,
    question: "Will Participants receive Certificates?",
    answer: "Yes, participation certificates will be provided to all the participants."
  },
  {
    id: 6,
    question: "Who can attend UNNATI?",
    answer: "All the FE and SE students of AIT irrespective of their stream/branch are welcome to participate in the event. But remember, you get extra points for forming an inter-branch team or girl members team."
  }
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='w-full'>
      <section className='text-white rounded-lg'>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className='relative cursor-pointer p-4 rounded-lg'
              onClick={() => handleClick(index)}
            >
              <div className='flex md:items-center justify-between'>
                <p className='font-bold text-[0.9em] md:text-[32px] text-white'>{String(faq.id).padStart(2, '0')}.</p>
                <div className='flex-1 ml-3 w-[4em] justify-around gap-2'>
                  <p className= ' text-[0.9em] md:text-[1.2em]'>{faq.question}</p>
                </div>
                <div className='absolute  top-4 right-0 md:top-6 md:right-2 flex items-center justify-center text-white transition-transform duration-300'>
                  {activeIndex === index ? <MinusIcon /> : <PlusIcon />}
                </div>
              </div>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className='mt-4 text-[13px] md:text-[16px]'>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Questions;