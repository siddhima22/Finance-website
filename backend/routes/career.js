const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');

const careerData = [
    {
        "name": "Software Developer",
        "interests": {"problem-solving": 4, "programming": 3},
        "skills": {"technical": 4,"programming languages": 5, "software development methodologies":4},
    },
    {
        "name": "Teacher",
        "interests": {"working with children": 5, "knowledge sharing": 4, "education": 4},
        "skills": {"communication": 5 , "subject expertise": 4},
    },
    {
        "name": "Graphic Designer",
        "interests": {"artistic": 4 , "creativity": 4,"designing":4},
        "skills": {"creative": 4,"Adobe Creative Suite":5,"design principles":4},
    },
    {
        "name": "Data Analyst",
        "interests": {"investigative": 4, "realistic": 3},
        "skills": {"analytical": 4},
    },
    {
        "name": "Nurse",
        "interests": {"medical knowledge": 5, "healthcare":4,"patient care":5},
        "skills": {"clinical assessment": 5,"biology":5,  "communication":5},
    },
    {
        "name": "Marketing Manager",
        "interests": {"marketing": 4, "consumer behavior":4,"advertising":5},
        "skills": {"strategic": 4,"analytics": 4,"creativity":5},
    },
    {
        "name": "Chef",
        "interests": {"artistic": 4,"cooking":4},
        "skills": {"culinary": 4,"menu planning":4,"food safety":4},
    },
    {
        "name": "Mechanical Engineer",
        "interests": {"realistic": 4, "problem-solving": 3,"mechanics":4,"engineering":5},
        "skills": {"Maths":5,"problem-solving":3},
    },
    {
        "name": "Artist",
        "interests": {"artistic": 5,"expressive":5},
        "skills": {"creative": 5},
    },
    {
        "name": "Financial Analyst",
        "interests": {"analytic": 4,"Maths":4},
        "skills": {"analytical": 4,"communication":5},
    },
    {
        "name": "Dentist",
        "interests": {"realistic": 4, "social": 3},
        "skills": {"dental": 5},
    },
    {
        "name": "Journalist",
        "interests": {"investigative": 5, "artistic": 4},
        "skills": {"communication": 4},
    },
    {
        "name": "Architect",
        "interests": {"artistic": 4, "realistic": 3},
        "skills": {"design": 5},
    },
    {
        "name": "Police Officer",
        "interests": {"realistic": 4, "social": 3},
        "skills": {"law enforcement": 5},
    },
    {
        "name": "Psychologist",
        "interests": {"social": 4, "investigative": 3},
        "skills": {"counseling": 5},
    },
    {
        "name": "Electrician",
        "interests": {"realistic": 4},
        "skills": {"electrical": 5},
    },
    {
        "name": "Fashion Designer",
        "interests": {"artistic": 5},
        "skills": {"creative": 4},
    },
    {
        "name": "Pharmacist",
        "interests": {"investigative": 4},
        "skills": {"pharmacy": 5},
    },
    {
        "name": "Civil Engineer",
        "interests": {"realistic": 4},
        "skills": {"civil engineering": 4},
    },
    {
        "name": "Firefighter",
        "interests": {"realistic": 4, "social": 3},
        "skills": {"firefighting": 5},
    },
    {
        "name": "Biologist",
        "interests": {"investigative": 4},
        "skills": {"biological research": 4},
    },
    {
        "name": "Actor",
        "interests": {"artistic": 5},
        "skills": {"acting": 5},
    },
    {
        "name": "Accountant",
        "interests": {"enterprising": 4},
        "skills": {"financial accounting": 4},
    },
    {
        "name": "Physician",
        "interests": {"investigative": 4, "social": 4},
        "skills": {"medical": 5},
    },
    {
        "name": "Interior Designer",
        "interests": {"artistic": 4},
        "skills": {"interior design": 4},
    },
    {
        "name": "IT Manager",
        "interests": {"enterprising": 4, "technical": 4},
        "skills": {"information technology": 4},
    },
    {
        "name": "Phlebotomist",
        "interests": {"realistic": 3, "social": 4},
        "skills": {"phlebotomy": 5},
    },
    {
        "name": "Musician",
        "interests": {"music": 5},
        "skills": {"music": 5},
    },
 
    {
        "name": "Pharmacist",
        "interests": {"chemistry": 4,"biology":4},
        "skills": {"attention to detail": 5},
    },
    {
        "name": "Pilot",
        "interests": {"travel": 4},
        "skills": {"communication": 5},
    },
    {
        "name": "Photographer",
        "interests": {"artistic": 4},
        "skills": {"editing": 5},
    },
    {
        "name": "Quality Analyst",
        "interests": {"technical": 4},
        "skills": {"problem solving": 4,"attention to detail": 4},
    },
    
    
    
    
    {
        "name": "Tourist Guide",
        "interests": {"travelling": 4,"history":3},
        "skills": {"communication": 4},
    },
    {
        "name": "Geologist",
        "interests": {"geography": 4},
        "skills": {"research": 4},
    },
    {
        "name": "Archaeologist",
        "interests": {"geography": 4,"history":4},
        "skills": {"research": 4},
    },
    {
        "name": "Fitness Trainer",
        "interests": {"sports": 5},
        "skills": {"communication": 5},
    },
    {
        "name": "UX Designer",
        "interests": {"artistic": 4, "technical": 3},
        "skills": {"creativity": 5,"technical":3},
    },
    
    {
        "name": "Electrical Engineer",
        "interests": {"maths": 4,"physics":4},
        "skills": {"problem solving": 4},
    },
   
    {
        "name": "Biomedical Engineer",
        "interests": {"biology": 5, "maths": 4},
        "skills": {"problem solving": 4},
    },
    
    
    
    {
        "name": "Event Planner",
        "interests": {"creativity": 4, "coordination": 4},
        "skills": {"time management": 4,"communication":5},
    },
    {
        "name": "Chemical Engineer",
        "interests": {"chemistry": 4, "maths": 4},
        "skills": {"problem solving": 4},
    },
    {
        "name": "Translator",
        "interests": {"social": 4, "artistic": 3},
        "skills": {"languages": 4},
    },
    {
        "name": "Zoologist",
        "interests": {"zoology": 4, "conservation": 3},
        "skills": {"animal care": 4,"research":4},
    },
    {
        "name": "Social Media Manager",
        "interests": {"enterprising": 4,"online trends":4},
        "skills": {"social media management": 4,"content creation":4},
    },
    {
        "name": "Astronomer",
        "interests": {"physics": 5},
        "skills": {"problem solving": 4},
    },
    {
        "name": "Doctor",
        "interests": {"biology": 4, "chemistry":4},
        "skills": {"communication": 5},
    },
    {
        "name": "Lawyer",
        "interests": {"law": 4},
        "skills": {"communication": 5,"problem solving":3},
    },
    {
        "name": "Environmental Scientist",
        "interests": {"research": 4,"ecology":4,"environmental conversation":5},
        "skills": {"environmental science": 4},
    },
]
// Define a function to match assessment results to suitable careers
function matchCareers(userAnswers, careerData) {
    const matchedCareers = [];
  
    for (const career of careerData) {
      let interestScore = 0;
      let skillScore = 0;
  
      // Calculate interest score based on user answers
      for (const [interest, score] of Object.entries(userAnswers.interests)) {
        if (career.interests && career.interests[interest]) {
          interestScore += score * career.interests[interest];
        }
      }
  
      // Calculate skill score based on user answers
      for (const [skill, score] of Object.entries(userAnswers.skills)) {
        if (career.skills && career.skills[skill]) {
          skillScore += score * career.skills[skill];
        }
      }
  
      // You can define a threshold to filter suitable careers
      if (interestScore >= 10 && skillScore >= 5) {
        matchedCareers.push({
          name: career.name,
          interestScore,
          skillScore,
        });
      }
    }
  
    // Sort the matched careers by scores
    matchedCareers.sort((a, b) =>
      a.interestScore === b.interestScore
        ? b.skillScore - a.skillScore
        : b.interestScore - a.interestScore
    );
  
    return matchedCareers;
  }
  



// ROUTE 1: Add a new forumPost using: POST "/api/career". Login required
router.post(
  '/',
  fetchuser,
  
  async (req, res) => {
    try {
        const userAnswers = req.body

          
        const matchedCareers = matchCareers(userAnswers, careerData).slice(0, 10);

        const result = {
          topCareers: matchedCareers,
        };
      
        res.json(result);

    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  }
);

module.exports = router;
