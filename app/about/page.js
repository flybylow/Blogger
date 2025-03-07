import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:flex-shrink-0 flex items-center justify-center bg-gray-200 md:w-48 h-48">
            <p className="text-gray-500">Profile Image</p>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Designer & Developer</div>
            <h2 className="mt-1 text-xl font-semibold text-gray-900">Ward de Muynck</h2>
            <p className="mt-2 text-gray-600">
              I'm passionate about design, technology, and creating beautiful user experiences.
            </p>
          </div>
        </div>
      </div>
      
      <div className="prose max-w-none">
        <p className="text-gray-700 mb-4">
          Welcome to my portfolio! I'm a product designer with a passion for creating intuitive and engaging user experiences.
          I specialize in UI/UX design, interaction design, and front-end development.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">My Approach</h2>
        <p className="text-gray-700 mb-4">
          I believe in a user-centered design approach, focusing on understanding user needs and creating solutions
          that are both functional and delightful. My process involves research, ideation, prototyping, and iteration.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
        <ul className="list-disc pl-5 mb-6 text-gray-700">
          <li>UI/UX Design</li>
          <li>Interaction Design</li>
          <li>Prototyping</li>
          <li>User Research</li>
          <li>Front-end Development</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Connect With Me</h2>
        <p className="text-gray-700 mb-4">
          I'm always open to new opportunities and collaborations. Feel free to reach out to me through
          social media or email.
        </p>
        
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
          <a href="#" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
          <a href="#" className="text-blue-500 hover:text-blue-700">Dribbble</a>
        </div>
      </div>
    </div>
  )
} 