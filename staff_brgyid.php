<?php
    
    error_reporting(E_ALL ^ E_WARNING);
    ini_set('display_errors',0);
    require('classes/resident.class.php');
    $userdetails = $bmis->get_userdata();
    $bmis->delete_brgyid();
    $view = $bmis->view_brgyid();
    $id_resident = $_GET['id_resident'];
    $resident = $residentbmis->get_single_brgyid($id_resident);
   
?>

<?php 
    include('dashboard_sidebar_start_staff.php');
?>

<style>
    .input-icons i {
        position: absolute;
    }
        
    .input-icons {
        width: 30%;
        margin-bottom: 10px;
        margin-left: 34%;
    }
        
    .icon {
        padding: 10px;
        min-width: 40px;
    }
    .form-control{
        text-align: center;
    }
</style>

    <!-- Begin Page Content -->
    <div class="container-fluid">

    <!-- Page Heading -->

    <div class="row"> 
        <div class="col text-center"> 
            <h1> Barangay ID Card Requests</h1>
        </div>
    </div>

    <hr>
    <br>
    <br>

    <div class="row"> 
        <div class="col">
            <form method="POST">
            <div class="input-icons" >
                <i class="fa fa-search icon"></i>
                <input type="search" class="form-control" name="keyword" value=""style="border-radius: 30px;" required=""/>
            </div>
                <button class="btn btn-success" name="search_bspermit" style="width: 90px; font-size: 18px; border-radius:30px; margin-left:41.7%;">Search</button>
                <a href="staff_brgyid.php" class="btn btn-info" style="width: 90px; font-size: 18px; border-radius:30px;">Reload</a>
            </form>
            <br>
        </div>
    </div>

    <br>

    <div class="row"> 
        <div class="col"> 
            <?php 
                include('staff_brgyid_search.php');
            ?>
        </div>
    </div>
    
    
</div>
<!-- End of Main Content -->

<?php 
    include('dashboard_sidebar_end.php');
?>
