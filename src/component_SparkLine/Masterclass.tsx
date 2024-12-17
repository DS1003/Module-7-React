import { Clock, Users, Award } from 'lucide-react';

const Masterclass = () => {
  const courses = [
    {
      title: "WordPress",
      description: "Master the art of building and maintaining WordPress websites.",
      duration: "2 Days",
      participants: "20 Max",
      certification: "Certificate",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1734187991/master_zihlvw.avif"
    },
    {
      title: "UI/UX Design",
      description: "Learn the principles of user-centered design and development.",
      duration: "3 Days",
      participants: "15 Max",
      certification: "Certificate",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1734187991/master_zihlvw.avif"
    },
    {
      title: "SOLID Principles and Design Patterns",
      description: "Develop essential skills for leading technical teams and projects.",
      duration: "2 Days",
      participants: "18 Max",
      certification: "Certificate",
      image: "https://res.cloudinary.com/drxouwbms/image/upload/v1734187991/master_zihlvw.avif"
    }
  ];

  return (
    <section id="masterclass" className="py-32  bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#2e3192] mb-4">Expert Masterclasses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your skills with our intensive, industry-leading masterclasses.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200"
            >
              {/* Image Section */}
              <div className="relative h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {course.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-700 mb-6">{course.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-3 text-[#f36b22]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="h-5 w-5 mr-3 text-[#f36b22]" />
                    <span>{course.participants}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Award className="h-5 w-5 mr-3 text-[#f36b22]" />
                    <span>{course.certification}</span>
                  </div>
                </div>

                <button className="w-full mt-6 px-6 py-3 bg-[#2e3192] text-white rounded-lg hover:bg-[#f36b22] transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Masterclass;
