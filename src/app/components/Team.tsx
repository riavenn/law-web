'use client';

interface TeamMemberProps {
  name: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
}

const TeamMemberCard = ({ name, title, imageUrl, imageAlt }: TeamMemberProps) => {
  return (
    <div className="group text-center">
      <div className="relative mb-6">
        <img 
          src={imageUrl}
          alt={imageAlt}
          className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg"
        />
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-2">
        {name}
      </h3>
      
      <p className="text-slate-600 font-medium">
        {title}
      </p>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Av. Mehmet Yılmaz",
      title: "Avukat",
      imageUrl: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      imageAlt: "Av. Mehmet Yılmaz"
    },
    {
      name: "Av. Ayşe Demir",
      title: "Avukat",
      imageUrl: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      imageAlt: "Av. Ayşe Demir"
    },
    {
      name: "Av. Can Özkan",
      title: "Avukat",
      imageUrl: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      imageAlt: "Av. Can Özkan"
    },
    {
      name: "Av. Zeynep Kaya",
      title: "Avukat",
      imageUrl: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400",
      imageAlt: "Av. Zeynep Kaya"
    }
  ];

  return (
    <section id="ekip" className="py-20 bg-stone-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Ekibimiz
          </h2>
          <h3 className="text-xl font-semibold text-slate-700 mb-6">
            Deneyimli ve Uzman Avukat Kadromuz
          </h3>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Hukukun farklı alanlarında uzmanlaşmış, deneyimli avukat kadromuz ile 
            müvekkillerimize en kaliteli hukuki hizmeti sunmaktayız. Her bir ekip üyemiz, 
            kendi alanında derinlemesine bilgi ve deneyime sahiptir.
          </p>
        </div>
        
        {/* Ekip Üyeleri Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <TeamMemberCard
                name={member.name}
                title={member.title}
                imageUrl={member.imageUrl}
                imageAlt={member.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;