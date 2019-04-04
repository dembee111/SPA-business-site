<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    public function all()
    {
    	$customers = Customer::all();
    	return response()->json([
              "customers" => $customers
    	], 200);
    }

    public function get($id)
    {
    	$customer = Customer::whereId($id)->first();
    	return response()->json([
              "customer" => $customer
    	], 200);
    	
    }

    public function new(Request $request)
    {
       $customer = Customer::create($request->only(["name", "email", "phone", "company"]));

       return response()->json([
           "customer" => $customer
       ], 200);
    }
}
