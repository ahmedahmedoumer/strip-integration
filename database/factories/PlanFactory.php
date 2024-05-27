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
    public function Free()
    {
        return $this->state([
            'id'=>Str::uuid()->toString(),
            'name'=>'Free',
            'stripe_name' => 'Free',
            'stripe_id' => 'price_1PL79tFlHt4LRnKP2hzDJ06Q',
            'slug'=>'Free',
            'price' => 0,
            'description'=>'Free  subscription'
        ]);
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

    public function Standard()
    {
        return $this->state([
            'id'=>Str::uuid()->toString(),
            'stripe_name' => 'Standard',
            'name'=>'Standard',
            'stripe_id' => 'price_1PKyxdFlHt4LRnKPEHuGTLF3',
            'price' => 20,
            'slug'=>'Standard',
            'description'=>'Standard Level subscription'
        ]);
    }
}
