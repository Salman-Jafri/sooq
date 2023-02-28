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
        Schema::table('users', function (Blueprint $table) {
            //
            
            $table->string('member_type')->default('web');
            $table->integer('member_category')->nullable();
            $table->string('member_contact')->nullable();
            $table->text('member_notes')->nullable();
            $table->string('member_status', 50)->default('Approved');
            $table->tinyInteger('qr_status')->default(0)->unsigned();
            $table->string('profile_image')->nullable();
            $table->string('banner_image')->nullable();
            $table->string('type_user')->nullable();
            $table->string('member_contact2')->nullable();
            $table->string('member_contact3')->nullable();
            $table->string('member_contact4')->nullable();
            $table->string('member_location')->nullable();
            $table->text('member_description')->nullable();
            $table->string('qr_title_en')->nullable();
            $table->string('qr_title_ar')->nullable();
            $table->text('link_os')->nullable();
            $table->text('link_insta')->nullable();
            $table->text('link_olx')->nullable();
            $table->text('link_others')->nullable();
            $table->integer('assigned_user')->nullable();
            $table->string('in_user')->nullable();
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
        Schema::table('users', function (Blueprint $table) {
            
            $table->dropColumn('member_type');
            $table->dropColumn('member_category');
            $table->dropColumn('member_contact');
            $table->dropColumn('member_notes');
            $table->dropColumn('member_status');
            $table->dropColumn('profile_image');
            $table->dropColumn('banner_image');
            $table->dropColumn('type_user');
            $table->dropColumn('member_contact2');
            $table->dropColumn('member_contact3');
            $table->dropColumn('member_contact4');
            $table->dropColumn('member_location');
            $table->dropColumn('member_description');
            $table->dropColumn('qr_title_en');
            $table->dropColumn('qr_title_ar');
            $table->dropColumn('link_os');
            $table->dropColumn('link_insta');
            $table->dropColumn('link_olx');
            $table->dropColumn('link_others');
            $table->dropColumn('assigned_user');
            $table->dropColumn('in_user');
            $table->dropColumn('app_users');
            $table->dropColumn('app_date');
        });
    }
};
