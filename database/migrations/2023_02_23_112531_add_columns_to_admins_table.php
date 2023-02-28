<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('admins', function (Blueprint $table) {
            
            $table->tinyInteger('dashboard')->default(0);
            $table->tinyInteger('dashboard1')->default(0);
            $table->tinyInteger('dashboard2')->default(0);
            $table->tinyInteger('member_category')->default(0);
            $table->tinyInteger('all_members')->default(0);
            $table->tinyInteger('all_cars')->default(0);
            $table->tinyInteger('car_origin')->default(0);
            $table->tinyInteger('car_make')->default(0);
            $table->tinyInteger('car_model')->default(0);
            $table->tinyInteger('cylinder')->default(0);
            $table->tinyInteger('transmision')->default(0);
            $table->tinyInteger('carkeys')->default(0);
            $table->tinyInteger('interior_color')->default(0);
            $table->tinyInteger('exterior_color')->default(0);
            $table->tinyInteger('option')->default(0);
            $table->tinyInteger('fule_type')->default(0);
            $table->tinyInteger('drive_line')->default(0);
            $table->tinyInteger('odometer')->default(0);
            $table->tinyInteger('opensooq')->default(0);
            $table->tinyInteger('expense_category')->default(0);
            $table->tinyInteger('expenses')->default(0);
            $table->tinyInteger('homepage')->default(0);
            $table->tinyInteger('slider')->default(0);
            $table->tinyInteger('footer')->default(0);
            $table->tinyInteger('learning_video')->default(0);
            $table->tinyInteger('subcribers')->default(0);
            $table->tinyInteger('translation')->default(0);
            $table->tinyInteger('members_action')->default(0);
            $table->tinyInteger('users')->default(0);
            $table->string('in_user',100)->nullable();
            $table->string('app_users')->nullable();
            $table->timestamp('app_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('admins', function (Blueprint $table) {

            $table->dropColumn('dashboard');
            $table->dropColumn('dashboard1');
            $table->dropColumn('dashboard2');
            $table->dropColumn('member_category');
            $table->dropColumn('all_members');
            $table->dropColumn('all_cars');
            $table->dropColumn('car_origin');
            $table->dropColumn('car_make');
            $table->dropColumn('car_model');
            $table->dropColumn('cylinder');
            $table->dropColumn('transmision');
            $table->dropColumn('carkeys');
            $table->dropColumn('interior_color');
            $table->dropColumn('exterior_color');
            $table->dropColumn('option');
            $table->dropColumn('fule_type');
            $table->dropColumn('drive_line');
            $table->dropColumn('odometer');
            $table->dropColumn('opensooq');
            $table->dropColumn('expense_category');
            $table->dropColumn('expenses');
            $table->dropColumn('homepage');
            $table->dropColumn('slider');
            $table->dropColumn('footer');
            $table->dropColumn('learning_video');
            $table->dropColumn('subcribers');
            $table->dropColumn('translation');
            $table->dropColumn('members_action');
            $table->dropColumn('users');
            $table->dropColumn('in_user');
            $table->dropColumn('app_users');
            $table->dropColumn('app_date');
        });
    }
};
