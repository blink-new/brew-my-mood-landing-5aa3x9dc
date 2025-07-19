import { useState } from 'react'
import { ChevronRight, RotateCcw } from 'lucide-react'

interface QuizQuestion {
  id: number
  question: string
  options: { text: string; value: string; emoji: string }[]
}

interface Ingredient {
  name: string
  flavor: string
  benefits: string
  emoji: string
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "How are you feeling today?",
    options: [
      { text: "Stressed & Overwhelmed", value: "stressed", emoji: "😰" },
      { text: "Tired & Low Energy", value: "tired", emoji: "😴" },
      { text: "Anxious & Restless", value: "anxious", emoji: "😟" },
      { text: "Happy & Energetic", value: "happy", emoji: "😊" }
    ]
  },
  {
    id: 2,
    question: "What flavors do you gravitate towards?",
    options: [
      { text: "Earthy & Grounding", value: "earthy", emoji: "🌱" },
      { text: "Floral & Delicate", value: "floral", emoji: "🌸" },
      { text: "Spicy & Warming", value: "spicy", emoji: "🌶️" },
      { text: "Fresh & Citrusy", value: "citrus", emoji: "🍋" }
    ]
  },
  {
    id: 3,
    question: "When do you usually drink tea?",
    options: [
      { text: "Morning Boost", value: "morning", emoji: "🌅" },
      { text: "Afternoon Pick-me-up", value: "afternoon", emoji: "☀️" },
      { text: "Evening Wind-down", value: "evening", emoji: "🌙" },
      { text: "Anytime I Need Comfort", value: "anytime", emoji: "🤗" }
    ]
  },
  {
    id: 4,
    question: "What wellness goal matters most to you?",
    options: [
      { text: "Better Sleep", value: "sleep", emoji: "💤" },
      { text: "Stress Relief", value: "stress", emoji: "🧘" },
      { text: "Mental Clarity", value: "focus", emoji: "🧠" },
      { text: "Digestive Health", value: "digestion", emoji: "🌿" }
    ]
  }
]

const ingredientDatabase: Record<string, Ingredient[]> = {
  stressed: [
    { name: "Chamomile", flavor: "Sweet, apple-like", benefits: "Calms nerves and reduces anxiety", emoji: "🌼" },
    { name: "Lavender", flavor: "Floral, soothing", benefits: "Promotes relaxation and peace", emoji: "💜" },
    { name: "Lemon Balm", flavor: "Citrusy, mild", benefits: "Eases tension and worry", emoji: "🍃" }
  ],
  tired: [
    { name: "Ginseng", flavor: "Earthy, slightly bitter", benefits: "Boosts energy naturally", emoji: "⚡" },
    { name: "Yerba Mate", flavor: "Grassy, robust", benefits: "Sustained energy without jitters", emoji: "🌿" },
    { name: "Green Tea", flavor: "Fresh, vegetal", benefits: "Gentle caffeine and antioxidants", emoji: "🍵" }
  ],
  anxious: [
    { name: "Passionflower", flavor: "Mild, grassy", benefits: "Reduces anxiety and restlessness", emoji: "🌺" },
    { name: "Ashwagandha", flavor: "Earthy, slightly bitter", benefits: "Adaptogen for stress management", emoji: "🌱" },
    { name: "Holy Basil", flavor: "Spicy, clove-like", benefits: "Calms mind and body", emoji: "🌿" }
  ],
  happy: [
    { name: "Hibiscus", flavor: "Tart, cranberry-like", benefits: "Rich in antioxidants, uplifting", emoji: "🌺" },
    { name: "Rose Petals", flavor: "Floral, romantic", benefits: "Mood-enhancing and heart-opening", emoji: "🌹" },
    { name: "Orange Peel", flavor: "Citrusy, bright", benefits: "Energizing and mood-boosting", emoji: "🍊" }
  ]
}

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [recommendations, setRecommendations] = useState<Ingredient[]>([])

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      generateRecommendations(newAnswers)
    }
  }

  const generateRecommendations = (allAnswers: Record<number, string>) => {
    const mood = allAnswers[1]
    const flavor = allAnswers[2]
    const timing = allAnswers[3]
    const wellness = allAnswers[4]

    const ingredients: Ingredient[] = []
    
    // Add ingredients based on mood
    if (mood && ingredientDatabase[mood]) {
      ingredients.push(...ingredientDatabase[mood])
    }

    // Add complementary ingredients based on other answers
    const additionalIngredients = [
      { name: "Honey", flavor: "Sweet, floral", benefits: "Natural sweetener with antibacterial properties", emoji: "🍯" },
      { name: "Cinnamon", flavor: "Warm, spicy", benefits: "Supports metabolism and blood sugar", emoji: "🌰" },
      { name: "Ginger", flavor: "Spicy, warming", benefits: "Aids digestion and circulation", emoji: "🫚" },
      { name: "Mint", flavor: "Cool, refreshing", benefits: "Soothes stomach and freshens breath", emoji: "🌿" }
    ]

    ingredients.push(...additionalIngredients.slice(0, 2))
    setRecommendations(ingredients.slice(0, 6))
    setShowResults(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setRecommendations([])
  }

  if (showResults) {
    return (
      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-medium text-[#264E36] mb-6">
            Your Perfect Tea Blend
          </h2>
          <p className="font-inter text-[#737373] mb-12">
            Based on your answers, here are the ingredients we recommend for your personalized blend
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {recommendations.map((ingredient, index) => (
              <div key={index} className="bg-[#FBFAF7] rounded-2xl p-6 text-left">
                <div className="text-3xl mb-3">{ingredient.emoji}</div>
                <h3 className="font-playfair text-xl font-medium text-[#264E36] mb-2">
                  {ingredient.name}
                </h3>
                <p className="font-inter text-sm text-[#D1B87F] mb-2">
                  {ingredient.flavor}
                </p>
                <p className="font-inter text-sm text-[#737373]">
                  {ingredient.benefits}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="flex items-center justify-center gap-2 bg-white border-2 border-[#D1B87F] text-[#264E36] font-inter font-medium px-6 py-3 rounded-full btn-hover"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </button>
            <button className="bg-[#D1B87F] text-[#264E36] font-inter font-medium px-8 py-3 rounded-full btn-hover">
              Get My Blend
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="font-inter text-sm text-[#737373]">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="font-inter text-sm text-[#737373]">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-[#F5F4F0] rounded-full h-2">
            <div
              className="bg-[#D1B87F] h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-medium text-[#264E36] mb-8">
            {questions[currentQuestion].question}
          </h2>

          <div className="grid gap-4 max-w-2xl mx-auto">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="flex items-center justify-between p-6 bg-[#FBFAF7] rounded-2xl hover:bg-[#F5F4F0] transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{option.emoji}</span>
                  <span className="font-inter text-[#264E36] font-medium">
                    {option.text}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#D1B87F] group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}