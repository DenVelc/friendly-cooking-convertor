"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Updated dataset
const volumeToWeight = {
  "all-purpose flour": {
    name: "All-Purpose Flour",
    emoji: "🌾",
    category: "Flour",
    measurements: {
      cup: { grams: 120, ounces: 4.25, pounds: 0.265, kilograms: 0.12 },
      tablespoon: { grams: 7.5, ounces: 0.27, pounds: 0.017, kilograms: 0.008 },
      teaspoon: { grams: 2.5, ounces: 0.09, pounds: 0.003, kilograms: 0.003 },
      fluid_ounce: { grams: 15.0, ounces: 0.53, pounds: 0.033, kilograms: 0.015 },
      milliliter: { grams: 0.5, ounces: 0.02, pounds: 0.0011, kilograms: 0.0005 },
      liter: { grams: 500, ounces: 17.64, pounds: 1.102, kilograms: 0.5 },
    },
  },
  "whole wheat flour": {
    name: "Whole Wheat Flour",
    emoji: "🌾",
    category: "Flour",
    measurements: {
      cup: { grams: 113, ounces: 4.0, pounds: 0.249, kilograms: 0.113 },
      tablespoon: { grams: 7.1, ounces: 0.25, pounds: 0.016, kilograms: 0.007 },
      teaspoon: { grams: 2.35, ounces: 0.08, pounds: 0.002, kilograms: 0.002 },
      fluid_ounce: { grams: 14.1, ounces: 0.5, pounds: 0.031, kilograms: 0.014 },
      milliliter: { grams: 0.471, ounces: 0.017, pounds: 0.001, kilograms: 0.000471 },
      liter: { grams: 471, ounces: 16.62, pounds: 1.039, kilograms: 0.471 },
    },
  },
  "bread flour": {
    name: "Bread Flour",
    emoji: "🍞",
    category: "Flour",
    measurements: {
      cup: { grams: 120, ounces: 4.25, pounds: 0.265, kilograms: 0.12 },
      tablespoon: { grams: 7.5, ounces: 0.27, pounds: 0.017, kilograms: 0.008 },
      teaspoon: { grams: 2.5, ounces: 0.09, pounds: 0.003, kilograms: 0.003 },
      fluid_ounce: { grams: 15.0, ounces: 0.53, pounds: 0.033, kilograms: 0.015 },
      milliliter: { grams: 0.5, ounces: 0.02, pounds: 0.0011, kilograms: 0.0005 },
      liter: { grams: 500, ounces: 17.64, pounds: 1.102, kilograms: 0.5 },
    },
  },
  "granulated sugar": {
    name: "Granulated Sugar",
    emoji: "🍯",
    category: "Sugar",
    measurements: {
      cup: { grams: 198, ounces: 7.0, pounds: 0.437, kilograms: 0.198 },
      tablespoon: { grams: 12.4, ounces: 0.44, pounds: 0.027, kilograms: 0.012 },
      teaspoon: { grams: 4.1, ounces: 0.14, pounds: 0.009, kilograms: 0.004 },
      fluid_ounce: { grams: 24.8, ounces: 0.88, pounds: 0.055, kilograms: 0.025 },
      milliliter: { grams: 0.825, ounces: 0.029, pounds: 0.0, kilograms: 0.000825 },
      liter: { grams: 825, ounces: 29.1, pounds: 1.818, kilograms: 0.825 },
    },
  },
  "brown sugar (packed)": {
    name: "Brown Sugar (Packed)",
    emoji: "🍂",
    category: "Sugar",
    measurements: {
      cup: { grams: 213, ounces: 7.5, pounds: 0.47, kilograms: 0.213 },
      tablespoon: { grams: 13.3, ounces: 0.47, pounds: 0.029, kilograms: 0.013 },
      teaspoon: { grams: 4.4, ounces: 0.16, pounds: 0.01, kilograms: 0.004 },
      fluid_ounce: { grams: 26.6, ounces: 0.94, pounds: 0.059, kilograms: 0.027 },
      milliliter: { grams: 0.888, ounces: 0.031, pounds: 0.0, kilograms: 0.000888 },
      liter: { grams: 888, ounces: 31.32, pounds: 1.957, kilograms: 0.888 },
    },
  },
  "powdered (confectioners) sugar": {
    name: "Powdered Sugar",
    emoji: "❄️",
    category: "Sugar",
    measurements: {
      cup: { grams: 113, ounces: 4.0, pounds: 0.249, kilograms: 0.113 },
      tablespoon: { grams: 7.1, ounces: 0.25, pounds: 0.016, kilograms: 0.007 },
      teaspoon: { grams: 2.4, ounces: 0.08, pounds: 0.005, kilograms: 0.002 },
      fluid_ounce: { grams: 14.1, ounces: 0.5, pounds: 0.031, kilograms: 0.014 },
      milliliter: { grams: 0.471, ounces: 0.017, pounds: 0.0, kilograms: 0.000471 },
      liter: { grams: 471, ounces: 16.62, pounds: 1.039, kilograms: 0.471 },
    },
  },
  "butter (unsalted)": {
    name: "Butter (Unsalted)",
    emoji: "🧈",
    category: "Fat",
    measurements: {
      cup: { grams: 227, ounces: 8.0, pounds: 0.5, kilograms: 0.227 },
      tablespoon: { grams: 14.2, ounces: 0.5, pounds: 0.031, kilograms: 0.014 },
      teaspoon: { grams: 4.7, ounces: 0.17, pounds: 0.01, kilograms: 0.005 },
      fluid_ounce: { grams: 28.4, ounces: 1.0, pounds: 0.062, kilograms: 0.028 },
      milliliter: { grams: 0.946, ounces: 0.033, pounds: 0.0, kilograms: 0.000946 },
      liter: { grams: 946, ounces: 33.33, pounds: 2.087, kilograms: 0.946 },
    },
  },
  "vegetable oil": {
    name: "Vegetable Oil",
    emoji: "🫒",
    category: "Oil",
    measurements: {
      cup: { grams: 218, ounces: 7.69, pounds: 0.481, kilograms: 0.218 },
      tablespoon: { grams: 13.6, ounces: 0.48, pounds: 0.03, kilograms: 0.014 },
      teaspoon: { grams: 4.5, ounces: 0.16, pounds: 0.01, kilograms: 0.005 },
      fluid_ounce: { grams: 27.3, ounces: 0.96, pounds: 0.06, kilograms: 0.027 },
      milliliter: { grams: 0.908, ounces: 0.032, pounds: 0.0, kilograms: 0.000908 },
      liter: { grams: 908, ounces: 32.04, pounds: 2.002, kilograms: 0.908 },
    },
  },
  honey: {
    name: "Honey",
    emoji: "🍯",
    category: "Liquid",
    measurements: {
      cup: { grams: 340, ounces: 12.0, pounds: 0.75, kilograms: 0.34 },
      tablespoon: { grams: 21.3, ounces: 0.75, pounds: 0.047, kilograms: 0.021 },
      teaspoon: { grams: 7.1, ounces: 0.25, pounds: 0.016, kilograms: 0.007 },
      fluid_ounce: { grams: 28.3, ounces: 1.0, pounds: 0.062, kilograms: 0.028 },
      milliliter: { grams: 1.417, ounces: 0.05, pounds: 0.0, kilograms: 0.001417 },
      liter: { grams: 1417, ounces: 50.0, pounds: 3.124, kilograms: 1.417 },
    },
  },
  "whole milk": {
    name: "Whole Milk",
    emoji: "🥛",
    category: "Liquid",
    measurements: {
      cup: { grams: 244, ounces: 8.61, pounds: 0.538, kilograms: 0.244 },
      tablespoon: { grams: 15.3, ounces: 0.54, pounds: 0.034, kilograms: 0.015 },
      teaspoon: { grams: 5.1, ounces: 0.18, pounds: 0.011, kilograms: 0.005 },
      fluid_ounce: { grams: 30.5, ounces: 1.08, pounds: 0.067, kilograms: 0.031 },
      milliliter: { grams: 1.017, ounces: 0.036, pounds: 0.002, kilograms: 0.001017 },
      liter: { grams: 1017, ounces: 35.87, pounds: 2.242, kilograms: 1.017 },
    },
  },
  "cocoa powder (unsweetened)": {
    name: "Cocoa Powder",
    emoji: "🍫",
    category: "Powder",
    measurements: {
      cup: { grams: 85, ounces: 3.0, pounds: 0.187, kilograms: 0.085 },
      tablespoon: { grams: 5.3, ounces: 0.19, pounds: 0.012, kilograms: 0.005 },
      teaspoon: { grams: 1.8, ounces: 0.06, pounds: 0.004, kilograms: 0.002 },
      fluid_ounce: { grams: 10.6, ounces: 0.37, pounds: 0.023, kilograms: 0.011 },
      milliliter: { grams: 0.354, ounces: 0.012, pounds: 0.0, kilograms: 0.000354 },
      liter: { grams: 354, ounces: 12.49, pounds: 0.78, kilograms: 0.354 },
    },
  },
}

const temperatureConversions = [
  { gas_mark: "1/4", fahrenheit: 225, celsius: 110 },
  { gas_mark: "1/2", fahrenheit: 250, celsius: 120 },
  { gas_mark: "1", fahrenheit: 275, celsius: 140 },
  { gas_mark: "2", fahrenheit: 300, celsius: 150 },
  { gas_mark: "3", fahrenheit: 325, celsius: 170 },
  { gas_mark: "4", fahrenheit: 350, celsius: 180 },
  { gas_mark: "5", fahrenheit: 375, celsius: 190 },
  { gas_mark: "6", fahrenheit: 400, celsius: 200 },
  { gas_mark: "7", fahrenheit: 425, celsius: 220 },
  { gas_mark: "8", fahrenheit: 450, celsius: 230 },
  { gas_mark: "9", fahrenheit: 475, celsius: 240 },
  { gas_mark: "10", fahrenheit: 500, celsius: 260 },
]

const measurementUnits = {
  cup: { name: "Cups", emoji: "🥤" },
  tablespoon: { name: "Tablespoons", emoji: "🥄" },
  teaspoon: { name: "Teaspoons", emoji: "🥄" },
  fluid_ounce: { name: "Fluid Ounces", emoji: "🥤" },
  milliliter: { name: "Milliliters", emoji: "🥤" },
  liter: { name: "Liters", emoji: "🥤" },
}

const weightUnits = {
  grams: { name: "Grams", emoji: "⚖️", symbol: "g" },
  ounces: { name: "Ounces", emoji: "⚖️", symbol: "oz" },
  pounds: { name: "Pounds", emoji: "⚖️", symbol: "lbs" },
  kilograms: { name: "Kilograms", emoji: "⚖️", symbol: "kg" },
}

export default function CookingConverter() {
  const [selectedIngredient, setSelectedIngredient] = useState<string>("")
  const [inputUnit, setInputUnit] = useState<string>("")
  const [outputUnit, setOutputUnit] = useState<string>("grams")
  const [amount, setAmount] = useState<string>("")
  const [result, setResult] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Temperature converter states
  const [tempInput, setTempInput] = useState<string>("")
  const [tempInputUnit, setTempInputUnit] = useState<string>("fahrenheit")
  const [tempResults, setTempResults] = useState<any>(null)

  // Get available input units for selected ingredient
  const getAvailableInputUnits = (ingredientKey: string) => {
    if (!ingredientKey) return []
    const ingredient = volumeToWeight[ingredientKey as keyof typeof volumeToWeight]
    return Object.keys(ingredient.measurements)
  }

  // Reset input unit when ingredient changes
  useEffect(() => {
    if (selectedIngredient) {
      const availableUnits = getAvailableInputUnits(selectedIngredient)
      if (availableUnits.length > 0) {
        // Prefer cups, then tablespoons, then teaspoons
        if (availableUnits.includes("cup")) {
          setInputUnit("cup")
        } else if (availableUnits.includes("tablespoon")) {
          setInputUnit("tablespoon")
        } else if (availableUnits.includes("teaspoon")) {
          setInputUnit("teaspoon")
        } else {
          setInputUnit(availableUnits[0])
        }
      }
    }
    setAmount("")
    setResult(0)
  }, [selectedIngredient])

  // Calculate conversion
  useEffect(() => {
    if (selectedIngredient && inputUnit && outputUnit && amount && !isNaN(Number.parseFloat(amount))) {
      const ingredient = volumeToWeight[selectedIngredient as keyof typeof volumeToWeight]
      const conversionRate =
        ingredient.measurements[inputUnit as keyof typeof ingredient.measurements]?.[
          outputUnit as keyof typeof conversionRate
        ]

      if (conversionRate) {
        const calculatedResult = Number.parseFloat(amount) * conversionRate
        setResult(Math.round(calculatedResult * 1000) / 1000) // Round to 3 decimal places
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 500)
      }
    } else {
      setResult(0)
    }
  }, [selectedIngredient, inputUnit, outputUnit, amount])

  // Temperature conversion
  useEffect(() => {
    if (tempInput && !isNaN(Number.parseFloat(tempInput))) {
      const inputTemp = Number.parseFloat(tempInput)
      const results: any = {}

      if (tempInputUnit === "fahrenheit") {
        results.celsius = Math.round(((inputTemp - 32) * 5) / 9)
        results.fahrenheit = inputTemp
      } else if (tempInputUnit === "celsius") {
        results.fahrenheit = Math.round((inputTemp * 9) / 5 + 32)
        results.celsius = inputTemp
      }

      // Find closest gas mark
      const closest = temperatureConversions.reduce((prev, curr) => {
        return Math.abs(curr.fahrenheit - results.fahrenheit) < Math.abs(prev.fahrenheit - results.fahrenheit)
          ? curr
          : prev
      })
      results.gas_mark = closest.gas_mark

      setTempResults(results)
    } else {
      setTempResults(null)
    }
  }, [tempInput, tempInputUnit])

  const availableInputUnits = selectedIngredient ? getAvailableInputUnits(selectedIngredient) : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-lg">
              Convert Cups to Grams in Seconds 🍰
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-semibold max-w-2xl mx-auto drop-shadow">
              The ultimate baking buddy for TikTok chefs! ✨ No more kitchen math fails!
            </p>
          </div>

          {/* Floating Emojis */}
          <div className="absolute top-20 left-10 text-4xl animate-bounce">🧁</div>
          <div className="absolute top-32 right-16 text-4xl animate-pulse">🍪</div>
          <div className="absolute bottom-20 left-20 text-4xl animate-bounce delay-300">🎂</div>
          <div className="absolute bottom-32 right-12 text-4xl animate-pulse delay-500">🥧</div>
        </div>
      </div>

      {/* Main Converter Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border-0">
          <CardContent className="p-8">
            <Tabs defaultValue="volume-weight" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-purple-100 rounded-2xl p-1">
                <TabsTrigger value="volume-weight" className="rounded-xl font-bold text-lg py-3">
                  🥄 Volume to Weight
                </TabsTrigger>
                <TabsTrigger value="temperature" className="rounded-xl font-bold text-lg py-3">
                  🌡️ Temperature
                </TabsTrigger>
              </TabsList>

              <TabsContent value="volume-weight">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-gray-800 mb-2">Volume to Weight Converter ✨</h2>
                  <p className="text-gray-600 font-medium">Convert any ingredient from volume to weight! 🪄</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column - Input */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-black text-gray-700 text-center">FROM 📥</h3>

                    {/* Ingredient Selection */}
                    <div className="space-y-2">
                      <label className="text-lg font-bold text-gray-700 block">Choose Ingredient 🥄</label>
                      <Select value={selectedIngredient} onValueChange={setSelectedIngredient}>
                        <SelectTrigger className="h-14 text-lg rounded-2xl border-2 border-purple-200 focus:border-purple-400 bg-white shadow-lg">
                          <SelectValue placeholder="Select ingredient..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2 border-purple-200 max-h-80">
                          <div className="p-2">
                            {/* Group ingredients by category */}
                            {Object.entries(
                              Object.keys(volumeToWeight).reduce(
                                (acc, key) => {
                                  const ingredient = volumeToWeight[key as keyof typeof volumeToWeight]
                                  if (!acc[ingredient.category]) acc[ingredient.category] = []
                                  acc[ingredient.category].push({ key, ingredient })
                                  return acc
                                },
                                {} as Record<string, Array<{ key: string; ingredient: any }>>,
                              ),
                            ).map(([category, items]) => (
                              <div key={category}>
                                <div className="text-sm font-bold text-gray-500 px-2 py-1 uppercase">{category}S</div>
                                {items.map(({ key, ingredient }) => (
                                  <SelectItem key={key} value={key} className="text-lg py-3 rounded-xl">
                                    <span className="flex items-center gap-2">
                                      <span className="text-xl">{ingredient.emoji}</span>
                                      {ingredient.name}
                                    </span>
                                  </SelectItem>
                                ))}
                              </div>
                            ))}
                          </div>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Input Unit Selection */}
                    {selectedIngredient && availableInputUnits.length > 1 && (
                      <div className="space-y-2">
                        <label className="text-lg font-bold text-gray-700 block">Measurement Unit 📏</label>
                        <Select value={inputUnit} onValueChange={setInputUnit}>
                          <SelectTrigger className="h-14 text-lg rounded-2xl border-2 border-blue-200 focus:border-blue-400 bg-white shadow-lg">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="rounded-2xl border-2 border-blue-200">
                            {availableInputUnits.map((unit) => (
                              <SelectItem key={unit} value={unit} className="text-lg py-3 rounded-xl">
                                <span className="flex items-center gap-2">
                                  <span className="text-xl">
                                    {measurementUnits[unit as keyof typeof measurementUnits].emoji}
                                  </span>
                                  {measurementUnits[unit as keyof typeof measurementUnits].name}
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {/* Amount Input */}
                    {selectedIngredient && inputUnit && (
                      <div className="space-y-2">
                        <label className="text-lg font-bold text-gray-700 block">
                          Amount {measurementUnits[inputUnit as keyof typeof measurementUnits].emoji}
                        </label>
                        <Input
                          type="number"
                          step="0.25"
                          min="0"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder={`Enter ${measurementUnits[inputUnit as keyof typeof measurementUnits].name.toLowerCase()}`}
                          className="h-14 text-lg rounded-2xl border-2 border-pink-200 focus:border-pink-400 bg-white shadow-lg text-center font-semibold"
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Column - Output */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-black text-gray-700 text-center">TO 📤</h3>

                    {/* Output Unit Selection */}
                    <div className="space-y-2">
                      <label className="text-lg font-bold text-gray-700 block">Weight Unit ⚖️</label>
                      <Select value={outputUnit} onValueChange={setOutputUnit}>
                        <SelectTrigger className="h-14 text-lg rounded-2xl border-2 border-green-200 focus:border-green-400 bg-white shadow-lg">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2 border-green-200">
                          {Object.entries(weightUnits).map(([unit, info]) => (
                            <SelectItem key={unit} value={unit} className="text-lg py-3 rounded-xl">
                              <span className="flex items-center gap-2">
                                <span className="text-xl">{info.emoji}</span>
                                {info.name}
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Result Display */}
                    {selectedIngredient && amount && inputUnit && result > 0 && (
                      <div
                        className={`text-center p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl shadow-lg transform transition-all duration-500 ${isAnimating ? "scale-110" : "scale-100"}`}
                      >
                        <div className="text-6xl mb-2">
                          {volumeToWeight[selectedIngredient as keyof typeof volumeToWeight].emoji}
                        </div>
                        <div className="text-2xl font-black text-gray-800 mb-1">
                          {amount} {measurementUnits[inputUnit as keyof typeof measurementUnits].name.toLowerCase()} =
                        </div>
                        <div className="text-5xl font-black text-purple-600 mb-2">
                          {result} {weightUnits[outputUnit as keyof typeof weightUnits].symbol}
                        </div>
                        <div className="text-lg text-gray-600 font-semibold">
                          of {volumeToWeight[selectedIngredient as keyof typeof volumeToWeight].name}
                        </div>
                        <div className="text-sm text-gray-500 mt-2 font-medium">Professional baking standards ⚖️</div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="temperature">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-gray-800 mb-2">Temperature Converter 🌡️</h2>
                  <p className="text-gray-600 font-medium">Convert oven temperatures with gas marks! 🔥</p>
                </div>

                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Temperature Input */}
                    <div className="space-y-2">
                      <label className="text-lg font-bold text-gray-700 block">Temperature 🌡️</label>
                      <Input
                        type="number"
                        value={tempInput}
                        onChange={(e) => setTempInput(e.target.value)}
                        placeholder="Enter temperature"
                        className="h-14 text-lg rounded-2xl border-2 border-orange-200 focus:border-orange-400 bg-white shadow-lg text-center font-semibold"
                      />
                    </div>

                    {/* Temperature Unit */}
                    <div className="space-y-2">
                      <label className="text-lg font-bold text-gray-700 block">Unit 📏</label>
                      <Select value={tempInputUnit} onValueChange={setTempInputUnit}>
                        <SelectTrigger className="h-14 text-lg rounded-2xl border-2 border-orange-200 focus:border-orange-400 bg-white shadow-lg">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2 border-orange-200">
                          <SelectItem value="fahrenheit" className="text-lg py-3 rounded-xl">
                            <span className="flex items-center gap-2">
                              <span className="text-xl">🇺🇸</span>
                              Fahrenheit (°F)
                            </span>
                          </SelectItem>
                          <SelectItem value="celsius" className="text-lg py-3 rounded-xl">
                            <span className="flex items-center gap-2">
                              <span className="text-xl">🌍</span>
                              Celsius (°C)
                            </span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Temperature Results */}
                  {tempResults && (
                    <div className="text-center p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl shadow-lg">
                      <div className="text-4xl mb-4">🔥</div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-white/50 rounded-xl p-4">
                          <div className="text-sm font-bold text-gray-600 mb-1">FAHRENHEIT</div>
                          <div className="text-2xl font-black text-red-600">{tempResults.fahrenheit}°F</div>
                        </div>
                        <div className="bg-white/50 rounded-xl p-4">
                          <div className="text-sm font-bold text-gray-600 mb-1">CELSIUS</div>
                          <div className="text-2xl font-black text-blue-600">{tempResults.celsius}°C</div>
                        </div>
                        <div className="bg-white/50 rounded-xl p-4">
                          <div className="text-sm font-bold text-gray-600 mb-1">GAS MARK</div>
                          <div className="text-2xl font-black text-purple-600">{tempResults.gas_mark}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Temperature Reference Table */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-black text-gray-800 mb-4 text-center">Quick Reference 📋</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      {temperatureConversions.slice(0, 8).map((temp) => (
                        <div key={temp.gas_mark} className="bg-white rounded-lg p-2 text-center">
                          <div className="font-bold text-purple-600">Gas {temp.gas_mark}</div>
                          <div className="text-gray-600">{temp.fahrenheit}°F</div>
                          <div className="text-gray-600">{temp.celsius}°C</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Fun Facts Section */}
        <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 text-center transform hover:scale-105 transition-all duration-200">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-black text-lg text-gray-800 mb-2">Lightning Fast</h3>
            <p className="text-gray-600 font-medium">Get instant conversions while you bake!</p>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 text-center transform hover:scale-105 transition-all duration-200">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-black text-lg text-gray-800 mb-2">Super Accurate</h3>
            <p className="text-gray-600 font-medium">Professional measurements with multiple weight units!</p>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 text-center transform hover:scale-105 transition-all duration-200">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-black text-lg text-gray-800 mb-2">TikTok Ready</h3>
            <p className="text-gray-600 font-medium">Perfect for creating viral baking content!</p>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-3xl font-black text-white mb-4">Bake it. Share it. TikTok it. 🎬</h3>
            <p className="text-white/80 font-semibold mb-8 text-lg">
              Tag us in your baking adventures! We love seeing your creations! 💕
            </p>

            <div className="flex justify-center gap-6 mb-8">
              <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-black px-8 py-4 rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-200">
                <span className="text-xl mr-2">📱</span>
                Follow on TikTok
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-black px-8 py-4 rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-200">
                <span className="text-xl mr-2">📸</span>
                Follow on Instagram
              </Button>
            </div>

            <div className="text-white/60 font-semibold">
              <p>© 2024 Friendly Cooking Converter • Made with 💜 for bakers everywhere</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
