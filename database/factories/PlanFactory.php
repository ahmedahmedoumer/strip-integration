<?php

namespace Database\Factories;
use Illuminate\Support\Str;


use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Plan>
 */
class PlanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
        ];
    }
    public function goldLevel()
    {
        return $this->state([
            'id'=>Str::uuid()->toString(),
            'name'=>'gold',
            'stripe_name' => 'Gold Level',
            'stripe_id' => 'price_1PKyy7FlHt4LRnKPkkzBF0Gj',
            'slug'=>'gold',
            'price' => 20,
            'description'=>'Gold Level subscription'
        ]);
    }

    public function premium()
    {
        return $this->state([
            'id'=>Str::uuid()->toString(),
            'stripe_name' => 'Premium',
            'name'=>'premium',
            'stripe_id' => 'price_1PKyy7FlHt4LRnKPkkzBF0Gk',
            'price' => 30,
            'slug'=>'premium',
            'description'=>'Premium Level subscription'
        ]);
    }
}
