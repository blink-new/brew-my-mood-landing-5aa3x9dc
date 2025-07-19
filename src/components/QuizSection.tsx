import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react'

interface QuizQuestion {
  id: string
  question: string
  options: {
    id: string
    text: string
    ingredients: string[]
  }[]
}

interface Ingredient {
  name: string
  flavor: string
  benefits: string[]
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'mood',
    question: 'How are you feeling today?',
    options: [
      { id: 'energetic', text: 'Energetic & Ready to Conquer', ingredients: ['green-tea', 'ginseng', 'yerba-mate'] },
      { id: 'calm', text: 'Seeking Peace & Relaxation', ingredients: ['chamomile', 'lavender', 'lemon-balm'] },
      { id: 'focused', text: 'Need Mental Clarity', ingredients: ['ginkgo', 'peppermint', 'rosemary'] },
      { id: 'stressed', text: 'Feeling Overwhelmed', ingredients: ['ashwagandha', 'passionflower', 'valerian'] }
    ]
  },
  {
    id: 'flavor',
    question: 'What flavors make you happy?',
    options: [
      { id: 'citrus', text: 'Bright & Citrusy', ingredients: ['lemon-verbena', 'orange-peel', 'lemongrass'] },
      { id: 'floral', text: 'Delicate & Floral', ingredients: ['rose-petals', 'jasmine', 'elderflower'] },
      { id: 'earthy', text: 'Rich & Earthy', ingredients: ['rooibos', 'dandelion', 'nettle'] },
      { id: 'spicy', text: 'Warm & Spicy', ingredients: ['cinnamon', 'ginger', 'cardamom'] }
    ]
  },
  {
    id: 'time',
    question: 'When do you most enjoy tea?',
    options: [
      { id: 'morning', text: 'Morning Energy Boost', ingredients: ['black-tea', 'guarana', 'rhodiola'] },
      { id: 'afternoon', text: 'Afternoon Pick-Me-Up', ingredients: ['white-tea', 'gotu-kola', 'schisandra'] },
      { id: 'evening', text: 'Evening Wind-Down', ingredients: ['chamomile', 'magnolia-bark', 'jujube'] },
      { id: 'anytime', text: 'Anytime Comfort', ingredients: ['oolong', 'tulsi', 'licorice-root'] }
    ]
  },
  {
    id: 'wellness',
    question: 'What wellness goal speaks to you?',
    options: [
      { id: 'immunity', text: 'Boost Immunity', ingredients: ['echinacea', 'elderberry', 'astragalus'] },
      { id: 'digestion', text: 'Support Digestion', ingredients: ['fennel', 'peppermint', 'ginger'] },
      { id: 'sleep', text: 'Better Sleep', ingredients: ['valerian', 'passionflower', 'lemon-balm'] },
      { id: 'energy', text: 'Natural Energy', ingredients: ['yerba-mate', 'ginseng', 'rhodiola'] }
    ]
  }
]

const ingredientDatabase: Record<string, Ingredient> = {
  'green-tea': { name: 'Green Tea', flavor: 'Fresh, grassy', benefits: ['Antioxidants', 'Mental alertness', 'Metabolism support'] },
  'ginseng': { name: 'Ginseng', flavor: 'Earthy, slightly bitter', benefits: ['Energy boost', 'Stress adaptation', 'Immune support'] },
  'yerba-mate': { name: 'Yerba Mate', flavor: 'Robust, vegetal', benefits: ['Sustained energy', 'Mental focus', 'Appetite control'] },
  'chamomile': { name: 'Chamomile', flavor: 'Sweet, honey-like', benefits: ['Relaxation', 'Sleep support', 'Digestive comfort'] },
  'lavender': { name: 'Lavender', flavor: 'Floral, calming', benefits: ['Stress relief', 'Sleep quality', 'Mood balance'] },
  'lemon-balm': { name: 'Lemon Balm', flavor: 'Citrusy, minty', benefits: ['Calm focus', 'Digestive support', 'Mood uplift'] },
  'ginkgo': { name: 'Ginkgo', flavor: 'Mild, slightly bitter', benefits: ['Memory support', 'Circulation', 'Mental clarity'] },
  'peppermint': { name: 'Peppermint', flavor: 'Cool, refreshing', benefits: ['Digestive aid', 'Mental alertness', 'Respiratory support'] },
  'rosemary': { name: 'Rosemary', flavor: 'Pine-like, aromatic', benefits: ['Memory enhancement', 'Circulation', 'Antioxidants'] },
  'ashwagandha': { name: 'Ashwagandha', flavor: 'Earthy, slightly bitter', benefits: ['Stress adaptation', 'Energy balance', 'Sleep quality'] },
  'passionflower': { name: 'Passionflower', flavor: 'Mild, grassy', benefits: ['Anxiety relief', 'Sleep support', 'Muscle relaxation'] },
  'valerian': { name: 'Valerian', flavor: 'Strong, earthy', benefits: ['Deep sleep', 'Stress relief', 'Muscle tension'] },
  'lemon-verbena': { name: 'Lemon Verbena', flavor: 'Bright citrus', benefits: ['Digestive support', 'Antioxidants', 'Mood uplift'] },
  'orange-peel': { name: 'Orange Peel', flavor: 'Sweet citrus', benefits: ['Vitamin C', 'Digestive aid', 'Mood enhancement'] },
  'lemongrass': { name: 'Lemongrass', flavor: 'Lemony, fresh', benefits: ['Digestive support', 'Detox support', 'Antimicrobial'] },
  'rose-petals': { name: 'Rose Petals', flavor: 'Delicate, floral', benefits: ['Skin health', 'Mood balance', 'Antioxidants'] },
  'jasmine': { name: 'Jasmine', flavor: 'Sweet, floral', benefits: ['Stress relief', 'Mood uplift', 'Antioxidants'] },
  'elderflower': { name: 'Elderflower', flavor: 'Sweet, floral', benefits: ['Immune support', 'Respiratory health', 'Antioxidants'] },
  'rooibos': { name: 'Rooibos', flavor: 'Sweet, vanilla-like', benefits: ['Caffeine-free', 'Antioxidants', 'Mineral rich'] },
  'dandelion': { name: 'Dandelion', flavor: 'Bitter, earthy', benefits: ['Liver support', 'Digestive aid', 'Detox support'] },
  'nettle': { name: 'Nettle', flavor: 'Earthy, grassy', benefits: ['Nutrient dense', 'Allergy support', 'Energy boost'] },
  'cinnamon': { name: 'Cinnamon', flavor: 'Sweet, warm spice', benefits: ['Blood sugar support', 'Antioxidants', 'Digestive aid'] },
  'ginger': { name: 'Ginger', flavor: 'Spicy, warming', benefits: ['Digestive support', 'Anti-inflammatory', 'Nausea relief'] },
  'cardamom': { name: 'Cardamom', flavor: 'Sweet, aromatic', benefits: ['Digestive aid', 'Breath freshener', 'Antioxidants'] },
  'black-tea': { name: 'Black Tea', flavor: 'Bold, malty', benefits: ['Energy boost', 'Heart health', 'Mental alertness'] },
  'guarana': { name: 'Guarana', flavor: 'Fruity, slightly bitter', benefits: ['Natural caffeine', 'Mental focus', 'Energy sustain'] },
  'rhodiola': { name: 'Rhodiola', flavor: 'Slightly bitter', benefits: ['Stress adaptation', 'Mental performance', 'Fatigue relief'] },
  'white-tea': { name: 'White Tea', flavor: 'Delicate, subtle', benefits: ['Gentle energy', 'Antioxidants', 'Skin health'] },
  'gotu-kola': { name: 'Gotu Kola', flavor: 'Mild, slightly bitter', benefits: ['Mental clarity', 'Circulation', 'Skin health'] },
  'schisandra': { name: 'Schisandra', flavor: 'Five flavors', benefits: ['Liver support', 'Stress adaptation', 'Mental clarity'] },
  'magnolia-bark': { name: 'Magnolia Bark', flavor: 'Bitter, aromatic', benefits: ['Sleep support', 'Stress relief', 'Digestive aid'] },
  'jujube': { name: 'Jujube', flavor: 'Sweet, fruity', benefits: ['Sleep quality', 'Anxiety relief', 'Digestive support'] },
  'oolong': { name: 'Oolong Tea', flavor: 'Complex, fruity', benefits: ['Metabolism support', 'Mental focus', 'Antioxidants'] },
  'tulsi': { name: 'Tulsi (Holy Basil)', flavor: 'Sweet, spicy', benefits: ['Stress adaptation', 'Respiratory support', 'Immune boost'] },
  'licorice-root': { name: 'Licorice Root', flavor: 'Sweet, anise-like', benefits: ['Adrenal support', 'Digestive aid', 'Throat soothing'] },
  'echinacea': { name: 'Echinacea', flavor: 'Earthy, slightly bitter', benefits: ['Immune boost', 'Cold prevention', 'Anti-inflammatory'] },
  'elderberry': { name: 'Elderberry', flavor: 'Tart, fruity', benefits: ['Immune support', 'Antioxidants', 'Cold relief'] },
  'astragalus': { name: 'Astragalus', flavor: 'Mild, slightly sweet', benefits: ['Immune support', 'Energy boost', 'Stress adaptation'] },
  'fennel': { name: 'Fennel', flavor: 'Sweet, licorice-like', benefits: ['Digestive support', 'Bloating relief', 'Breath freshener'] }
}

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [recommendedIngredients, setRecommendedIngredients] = useState<Ingredient[]>([])

  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }))
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      // Calculate results
      calculateResults()
    }
  }

  const calculateResults = () => {
    const allIngredients: string[] = []
    
    // Collect all ingredients from answers
    Object.entries(answers).forEach(([questionId, optionId]) => {
      const question = quizQuestions.find(q => q.id === questionId)
      const option = question?.options.find(o => o.id === optionId)
      if (option) {
        allIngredients.push(...option.ingredients)
      }
    })

    // Add the current question's answer
    const currentQuestionData = quizQuestions[currentQuestion]
    const currentAnswer = answers[currentQuestionData.id]
    if (currentAnswer) {
      const currentOption = currentQuestionData.options.find(o => o.id === currentAnswer)
      if (currentOption) {
        allIngredients.push(...currentOption.ingredients)
      }
    }

    // Count frequency and get top ingredients
    const ingredientCount: Record<string, number> = {}
    allIngredients.forEach(ingredient => {
      ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1
    })

    // Sort by frequency and take top 6-8 ingredients
    const sortedIngredients = Object.entries(ingredientCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 8)
      .map(([ingredient]) => ingredientDatabase[ingredient])
      .filter(Boolean)

    setRecommendedIngredients(sortedIngredients)
    setShowResults(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setRecommendedIngredients([])
  }

  if (showResults) {
    return (
      <section id="quiz" className="py-20 bg-gradient-to-b from-brew-background to-brew-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brew-accent rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-brew-primary" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-brew-primary mb-4">
              Your Perfect Tea Blend
            </h2>
            <p className="text-xl text-brew-text-light">
              Based on your preferences, here are the ingredients that will create your ideal tea experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {recommendedIngredients.map((ingredient, index) => (
              <Card key={index} className="border-brew-primary/20 hover:border-brew-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-brew-primary font-serif">
                    {ingredient.name}
                  </CardTitle>
                  <p className="text-brew-text-light italic">
                    {ingredient.flavor}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-brew-primary text-sm">Health Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {ingredient.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-brew-accent/20 text-brew-primary border-brew-accent/30">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-brew-text-light">
              Love your blend? Sign up below to get 25% off when we launch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={resetQuiz}
                variant="outline"
                className="border-brew-primary text-brew-primary hover:bg-brew-primary hover:text-white"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Quiz
              </Button>
              <Button 
                onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brew-primary hover:bg-brew-primary/90"
              >
                Get 25% Off Launch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <section id="quiz" className="py-20 bg-gradient-to-b from-brew-background to-brew-primary/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brew-primary mb-4">
            Discover Your Perfect Blend
          </h2>
          <p className="text-xl text-brew-text-light">
            Answer a few questions to find ingredients that match your mood and taste
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-brew-text-light mb-2">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-brew-primary/10 rounded-full h-2">
            <div 
              className="bg-brew-primary h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <Card className="border-brew-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-brew-primary text-center">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {question.options.map((option) => (
                <Button
                  key={option.id}
                  variant="outline"
                  className="h-auto p-6 text-left justify-start border-brew-primary/20 hover:border-brew-primary hover:bg-brew-primary/5 transition-all"
                  onClick={() => handleAnswer(question.id, option.id)}
                >
                  <div>
                    <div className="font-semibold text-brew-primary mb-1">
                      {option.text}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}