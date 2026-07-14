export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Ferramentas',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'Webpack', level: 75 },
        { name: 'Vite', level: 85 },
        { name: 'npm/yarn', level: 90 },
      ],
    },
    {
      category: 'Outros',
      skills: [
        { name: 'REST APIs', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Performance', level: 80 },
        { name: 'Acessibilidade', level: 75 },
        { name: 'Testing', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Habilidades</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar aplicações web modernas e eficientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
