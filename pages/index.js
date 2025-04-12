import { useState, useEffect } from 'react';
import axios from 'axios';
import BillCard from '../components/BillCard';
import NewsCard from '../components/NewsCard';
import OpEdCard from '../components/OpEdCard';
import CampaignUpdateCard from '../components/CampaignUpdateCard';
import PressReleaseCard from '../components/PressReleaseCard';
import LegislativeAchievementCard from '../components/LegislativeAchievementCard';
import ExpenditureCard from '../components/ExpenditureCard';
import RevenueCard from '../components/RevenueCard';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button'; // ✅ Import Button

export default function Home() {
  const [bills, setBills] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [pressReleases, setPressReleases] = useState([
    { title: "Soto Introduces Clean Water Legislation", summary: "New bill aims to improve water infrastructure in Florida." },
    { title: "Congressman Soto Hosts Town Hall", summary: "Community event to discuss upcoming bills and initiatives." }
  ]);

  const [newsArticles, setNewsArticles] = useState([
    { title: "Darren Soto Champions Affordable Housing", summary: "Recent efforts in Congress to tackle housing crisis." },
    { title: "Soto Pushes for Puerto Rico Statehood", summary: "Soto renews push for statehood bill in House of Representatives." }
  ]);

  const [opEds, setOpEds] = useState([
    { title: "The Future of Florida's Environment", summary: "Opinion piece on environmental challenges and legislative solutions." },
    { title: "Investing in Education is Investing in Our Future", summary: "Soto discusses education policy in guest editorial." }
  ]);

  const [campaignUpdates, setCampaignUpdates] = useState([
    { title: "Campaign Rally in Orlando", summary: "Join us for a rally to kick off the election season!" },
    { title: "Fundraising Goal Reached", summary: "Thanks to your support, we've hit our first major fundraising target!" }
  ]);

  const [legislativeAchievements, setLegislativeAchievements] = useState([
    { title: "Passed Clean Water Act", summary: "Bill passed to safeguard Florida’s wetlands and rivers." },
    { title: "Expanded Healthcare Access", summary: "New healthcare provisions enacted to help families." }
  ]);

  const [expenditures, setExpenditures] = useState([
    { title: "TV Ad Campaign", summary: "$20,000 spent on new television advertisements." },
    { title: "Community Event Costs", summary: "$5,000 spent on Orlando community event." }
  ]);

  const [revenue, setRevenue] = useState([
    { title: "Major Donor Contribution", summary: "$50,000 donation from key supporters." },
    { title: "Grassroots Fundraising", summary: "$15,000 raised from small donors." }
  ]);

  const BILLS_API_URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios.get(BILLS_API_URL)
      .then(response => {
        const posts = response.data.slice(0, 5);
        const formattedBills = posts.map(post => ({
          title: post.title,
          summary: post.body
        }));
        setBills(formattedBills);
      })
      .catch(error => {
        console.error("Error fetching bills:", error);
      });
  }, []);

  const filteredBills = bills.filter(bill =>
    bill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bill.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center mt-8">
        Darren Soto Research Dashboard
      </h1>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">📢 Press Releases</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {pressReleases.map((item, idx) => (
            <PressReleaseCard key={idx} title={item.title} summary={item.summary} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button label="View More Press Releases" onClick={() => alert('View More Press Releases!')} />
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">📰 News Articles</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {newsArticles.map((item, idx) => (
            <NewsCard key={idx} title={item.title} summary={item.summary} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button label="View More News" onClick={() => alert('View More News!')} />
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">📝 Op-Eds</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {opEds.map((item, idx) => (
            <OpEdCard key={idx} title={item.title} summary={item.summary} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button label="View More Op-Eds" onClick={() => alert('View More Op-Eds!')} />
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">🗳️ Campaign Updates</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {campaignUpdates.map((item, idx) => (
            <CampaignUpdateCard key={idx} title={item.title} summary={item.summary} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button label="Volunteer" onClick={() => alert('Thank you for volunteering!')} />
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">🏛️ Bills</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {filteredBills.map((bill, idx) => (
            <BillCard key={idx} title={bill.title} summary={bill.summary} />
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">🏆 Legislative Achievements</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {legislativeAchievements.map((item, idx) => (
            <LegislativeAchievementCard key={idx} title={item.title} summary={item.summary} />
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">💰 Campaign Expenditures</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {expenditures.map((item, idx) => (
            <ExpenditureCard key={idx} title={item.title} summary={item.summary} />
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">💵 Campaign Revenue</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {revenue.map((item, idx) => (
            <RevenueCard key={idx} title={item.title} summary={item.summary} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button label="Donate Now" onClick={() => alert('Thank you for your support!')} />
        </div>
      </section>
    </div>
  );
}
