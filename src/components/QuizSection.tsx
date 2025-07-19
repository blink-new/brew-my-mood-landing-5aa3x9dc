import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowRight, RotateCcw, Sparkles, Brain, Coffee, Leaf, Heart } from 'lucide-react'

interface QuizQuestion {
  id: string
  question: string
  emoji: string
  options: {
    id: string
    text: string
    emoji: string
    ingredients: string[]
  }[]
}

interface Ingredient {
  name: string
  flavor: string
  benefits: string[]
  emoji: string
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'mood',
    question: 'How are you feeling today?',
    emoji: '🌈',
    options: [
      { id: 'energetic', text: 'Energetic & Ready to Conquer', emoji: '⚡', ingredients: ['green-tea', 'ginseng', 'yerba-mate'] },
      { id: 'calm', text: 'Seeking Peace & Relaxation', emoji: '🧘', ingredients: ['chamomile', 'lavender', 'lemon-balm'] },
      { id: 'focused', text: 'Need Mental Clarity', emoji: '🎯', ingredients: ['ginkgo', 'peppermint', 'rosemary'] },
      { id: 'stressed', text: 'Feeling Overwhelmed', emoji: '😮‍💨', ingredients: ['ashwagandha', 'passionflower', 'valerian'] }
    ]
  },
  {
    id: 'flavor',
    question: 'What flavors make you happy?',
    emoji: '👅',
    options: [
      { id: 'citrus', text: 'Bright & Citrusy', emoji: '🍋', ingredients: ['lemon-verbena', 'orange-peel', 'lemongrass'] },
      { id: 'floral', text: 'Delicate & Floral', emoji: '🌸', ingredients: ['rose-petals', 'jasmine', 'elderflower'] },
      { id: 'earthy', text: 'Rich & Earthy', emoji: '🌍', ingredients: ['rooibos', 'dandelion', 'nettle'] },
      { id: 'spicy', text: 'Warm & Spicy', emoji: '🌶️', ingredients: ['cinnamon', 'ginger', 'cardamom'] }
    ]
  },
  {
    id: 'time',
    question: 'When do you most enjoy tea?',
    emoji: '⏰',
    options: [
      { id: 'morning', text: 'Morning Energy Boost', emoji: '🌅', ingredients: ['black-tea', 'guarana', 'rhodiola'] },
      { id: 'afternoon', text: 'Afternoon Pick-Me-Up', emoji: '☀️', ingredients: ['white-tea', 'gotu-kola', 'schisandra'] },
      { id: 'evening', text: 'Evening Wind-Down', emoji: '🌙', ingredients: ['chamomile', 'magnolia-bark', 'jujube'] },
      { id: 'anytime', text: 'Anytime Comfort', emoji: '🤗', ingredients: ['oolong', 'tulsi', 'licorice-root'] }
    ]
  },
  {
    id: 'wellness',
    question: 'What wellness goal speaks to you?',
    emoji: '💪',
    options: [
      { id: 'immunity', text: 'Boost Immunity', emoji: '🛡️', ingredients: ['echinacea', 'elderberry', 'astragalus'] },
      { id: 'digestion', text: 'Support Digestion', emoji: '🫄', ingredients: ['fennel', 'peppermint', 'ginger'] },
      { id: 'sleep', text: 'Better Sleep', emoji: '😴', ingredients: ['valerian', 'passionflower', 'lemon-balm'] },
      { id: 'energy', text: 'Natural Energy', emoji: '🔋', ingredients: ['yerba-mate', 'ginseng', 'rhodiola'] }
    ]
  }
]

const ingredientDatabase: Record<string, Ingredient> = {
  'green-tea': { name: 'Green Tea', flavor: 'Fresh, grassy', benefits: ['Antioxidants', 'Mental alertness', 'Metabolism support'], emoji: '🍃' },
  'ginseng': { name: 'Ginseng', flavor: 'Earthy, slightly bitter', benefits: ['Energy boost', 'Stress adaptation', 'Immune support'], emoji: '🌿' },
  'yerba-mate': { name: 'Yerba Mate', flavor: 'Robust, vegetal', benefits: ['Sustained energy', 'Mental focus', 'Appetite control'], emoji: '🧉' },
  'chamomile': { name: 'Chamomile', flavor: 'Sweet, honey-like', benefits: ['Relaxation', 'Sleep support', 'Digestive comfort'], emoji: '🌼' },
  'lavender': { name: 'Lavender', flavor: 'Floral, calming', benefits: ['Stress relief', 'Sleep quality', 'Mood balance'], emoji: '💜' },
  'lemon-balm': { name: 'Lemon Balm', flavor: 'Citrusy, minty', benefits: ['Calm focus', 'Digestive support', 'Mood uplift'], emoji: '🌱' },
  'ginkgo': { name: 'Ginkgo', flavor: 'Mild, slightly bitter', benefits: ['Memory support', 'Circulation', 'Mental clarity'], emoji: '🧠' },
  'peppermint': { name: 'Peppermint', flavor: 'Cool, refreshing', benefits: ['Digestive aid', 'Mental alertness', 'Respiratory support'], emoji: '🌿' },
  'rosemary': { name: 'Rosemary', flavor: 'Pine-like, aromatic', benefits: ['Memory enhancement', 'Circulation', 'Antioxidants'], emoji: '🌿' },
  'ashwagandha': { name: 'Ashwagandha', flavor: 'Earthy, slightly bitter', benefits: ['Stress adaptation', 'Energy balance', 'Sleep quality'], emoji: '🌱' },
  'passionflower': { name: 'Passionflower', flavor: 'Mild, grassy', benefits: ['Anxiety relief', 'Sleep support', 'Muscle relaxation'], emoji: '🌺' },
  'valerian': { name: 'Valerian', flavor: 'Strong, earthy', benefits: ['Deep sleep', 'Stress relief', 'Muscle tension'], emoji: '🌿' },
  'lemon-verbena': { name: 'Lemon Verbena', flavor: 'Bright citrus', benefits: ['Digestive support', 'Antioxidants', 'Mood uplift'], emoji: '🍋' },
  'orange-peel': { name: 'Orange Peel', flavor: 'Sweet citrus', benefits: ['Vitamin C', 'Digestive aid', 'Mood enhancement'], emoji: '🍊' },
  'lemongrass': { name: 'Lemongrass', flavor: 'Lemony, fresh', benefits: ['Digestive support', 'Detox support', 'Antimicrobial'], emoji: '🌾' },
  'rose-petals': { name: 'Rose Petals', flavor: 'Delicate, floral', benefits: ['Skin health', 'Mood balance', 'Antioxidants'], emoji: '🌹' },
  'jasmine': { name: 'Jasmine', flavor: 'Sweet, floral', benefits: ['Stress relief', 'Mood uplift', 'Antioxidants'], emoji: '🌸' },
  'elderflower': { name: 'Elderflower', flavor: 'Sweet, floral', benefits: ['Immune support', 'Respiratory health', 'Antioxidants'], emoji: '🌼' },
  'rooibos': { name: 'Rooibos', flavor: 'Sweet, vanilla-like', benefits: ['Caffeine-free', 'Antioxidants', 'Mineral rich'], emoji: '🍯' },
  'dandelion': { name: 'Dandelion', flavor: 'Bitter, earthy', benefits: ['Liver support', 'Digestive aid', 'Detox support'], emoji: '🌻' },
  'nettle': { name: 'Nettle', flavor: 'Earthy, grassy', benefits: ['Nutrient dense', 'Allergy support', 'Energy boost'], emoji: '🌿' },
  'cinnamon': { name: 'Cinnamon', flavor: 'Sweet, warm spice', benefits: ['Blood sugar support', 'Antioxidants', 'Digestive aid'], emoji: '🍂' },
  'ginger': { name: 'Ginger', flavor: 'Spicy, warming', benefits: ['Digestive support', 'Anti-inflammatory', 'Nausea relief'], emoji: '🫚' },
  'cardamom': { name: 'Cardamom', flavor: 'Sweet, aromatic', benefits: ['Digestive aid', 'Breath freshener', 'Antioxidants'], emoji: '🌿' },
  'black-tea': { name: 'Black Tea', flavor: 'Bold, malty', benefits: ['Energy boost', 'Heart health', 'Mental alertness'], emoji: '☕' },
  'guarana': { name: 'Guarana', flavor: 'Fruity, slightly bitter', benefits: ['Natural caffeine', 'Mental focus', 'Energy sustain'], emoji: '🔋' },
  'rhodiola': { name: 'Rhodiola', flavor: 'Slightly bitter', benefits: ['Stress adaptation', 'Mental performance', 'Fatigue relief'], emoji: '🌿' },
  'white-tea': { name: 'White Tea', flavor: 'Delicate, subtle', benefits: ['Gentle energy', 'Antioxidants', 'Skin health'], emoji: '🤍' },
  'gotu-kola': { name: 'Gotu Kola', flavor: 'Mild, slightly bitter', benefits: ['Mental clarity', 'Circulation', 'Skin health'], emoji: '🌿' },
  'schisandra': { name: 'Schisandra', flavor: 'Five flavors', benefits: ['Liver support', 'Stress adaptation', 'Mental clarity'], emoji: '🍇' },
  'magnolia-bark': { name: 'Magnolia Bark', flavor: 'Bitter, aromatic', benefits: ['Sleep support', 'Stress relief', 'Digestive aid'], emoji: '🌸' },
  'jujube': { name: 'Jujube', flavor: 'Sweet, fruity', benefits: ['Sleep quality', 'Anxiety relief', 'Digestive support'], emoji: '🍯' },
  'oolong': { name: 'Oolong Tea', flavor: 'Complex, fruity', benefits: ['Metabolism support', 'Mental focus', 'Antioxidants'], emoji: '🍃' },
  'tulsi': { name: 'Tulsi (Holy Basil)', flavor: 'Sweet, spicy', benefits: ['Stress adaptation', 'Respiratory support', 'Immune boost'], emoji: '🌿' },
  'licorice-root': { name: 'Licorice Root', flavor: 'Sweet, anise-like', benefits: ['Adrenal support', 'Digestive aid', 'Throat soothing'], emoji: '🍯' },
  'echinacea': { name: 'Echinacea', flavor: 'Earthy, slightly bitter', benefits: ['Immune boost', 'Cold prevention', 'Anti-inflammatory'], emoji: '🌻' },
  'elderberry': { name: 'Elderberry', flavor: 'Tart, fruity', benefits: ['Immune support', 'Antioxidants', 'Cold relief'], emoji: '🫐' },
  'astragalus': { name: 'Astragalus', flavor: 'Mild, slightly sweet', benefits: ['Immune support', 'Energy boost', 'Stress adaptation'], emoji: '🌿' },
  'fennel': { name: 'Fennel', flavor: 'Sweet, licorice-like', benefits: ['Digestive support', 'Bloating relief', 'Breath freshener'], emoji: '🌿' }
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
      <section id="quiz" className="py-24 bg-gradient-to-br from-brew-background via-brew-accent/5 to-brew-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-brew-accent/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-brew-primary/20 rounded-full blur-3xl floating-animation-delayed"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brew-accent to-brew-primary rounded-3xl mb-8 pulse-glow">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold gradient-text mb-6">
              Your Perfect Tea Blend ✨
            </h2>
            <p className="text-xl lg:text-2xl text-brew-text-light max-w-3xl mx-auto">
              Based on your unique preferences, here are the magical ingredients that will create your ideal tea experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {recommendedIngredients.map((ingredient, index) => (
              <Card key={index} className="border-brew-primary/20 hover:border-brew-primary/40 transition-all duration-300 hover-lift glass-card group">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {ingredient.emoji}
                  </div>
                  <CardTitle className="text-brew-primary font-serif text-xl">
                    {ingredient.name}
                  </CardTitle>
                  <p className="text-brew-text-light italic font-medium">
                    {ingredient.flavor}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-brew-primary text-sm flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Health Benefits:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {ingredient.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-brew-accent/20 text-brew-primary border-brew-accent/30 hover:bg-brew-accent/30 transition-colors">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-brew-primary/20">
              <p className="text-xl text-brew-text-light mb-6">
                Love your personalized blend? 🫖 Sign up below to get <span className="font-bold text-brew-primary">25% off</span> when we launch!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={resetQuiz}
                  variant="outline"
                  className="border-brew-primary text-brew-primary hover:bg-brew-primary hover:text-white transition-all duration-300 rounded-2xl px-8 py-3"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Retake Quiz
                </Button>
                <Button 
                  onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-brew-primary to-brew-accent hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl px-8 py-3"
                >
                  Get 25% Off Launch ✨
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <section id="quiz" className="py-24 bg-gradient-to-br from-brew-background via-brew-accent/5 to-brew-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brew-accent/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brew-primary/20 rounded-full blur-3xl floating-animation-delayed"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brew-accent/20 text-brew-primary px-6 py-3 rounded-full text-lg font-semibold mb-6">
            <Brain className="w-5 h-5 mr-2" />
            Personality Quiz
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold gradient-text mb-6">
            Discover Your Perfect Blend
          </h2>
          <p className="text-xl lg:text-2xl text-brew-text-light">
            Answer a few fun questions to find ingredients that match your mood and taste ✨
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-lg text-brew-text-light mb-4 font-medium">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-brew-primary/10 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-brew-primary to-brew-accent h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <Card className="border-brew-primary/20 glass-card hover-lift">
          <CardHeader className="text-center pb-8">
            <div className="text-6xl mb-4">{question.emoji}</div>
            <CardTitle className="text-3xl lg:text-4xl font-serif text-brew-primary">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {question.options.map((option) => (
                <Button
                  key={option.id}
                  variant="outline"
                  className="h-auto p-6 text-left justify-start border-brew-primary/20 hover:border-brew-primary hover:bg-brew-primary/5 transition-all duration-300 rounded-2xl group hover-lift"
                  onClick={() => handleAnswer(question.id, option.id)}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {option.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-brew-primary text-lg group-hover:text-brew-accent transition-colors">
                        {option.text}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-brew-text-light group-hover:text-brew-primary group-hover:translate-x-1 transition-all duration-300" />
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