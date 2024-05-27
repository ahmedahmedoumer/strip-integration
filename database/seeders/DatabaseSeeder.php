<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Plan;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        Plan::factory()->Free()->create();
        Plan::factory()->Standard()->create();
        Plan::factory()->goldLevel()->create();

    }
}
