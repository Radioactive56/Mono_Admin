from django.shortcuts import render
from .models import Meta_Dashboard,Nmap_Core_Dashboard,Scan,Host,Meta_Host_Table,Meta_Service_Table,Meta_Vulnerability_Table,Meta_Scan_Table
from .serializers import Meta_serializer,Nmap_serializer,Scan_Serializer,Host_Serializer,Meta_Host_Serializer,Service_Serializer,Vulnerability_Serializer,Meta_scan_Serializer,UserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import json
from django.contrib.auth.models import User,Permission
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import csv
import pandas as pd
# Create your views here.

@api_view(["GET"])
def get_meta(request):
    if request.method=="GET":
        data=Meta_Dashboard.objects.all()
        meta_data=Meta_serializer(data,many=True)
        return Response(meta_data.data,status=status.HTTP_200_OK)
    return Response([],status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_meta_id(request,id):
    if request.method=='GET':
        item=Meta_Dashboard.objects.filter(Pending_id=id)
        serializer=Meta_serializer(item,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    else:
        return Response([],status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def addscantable(request):
    item=Scan_Serializer(data=request.data)
    if item.is_valid():
        item.save()
        return Response({},status=status.HTTP_200_OK)
    else:
        print(item.errors)
        return Response({},status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def addMeta(request):
    data1 = json.loads(request.body)
    print(data1)
    item=Meta_serializer(data=request.data)
    print(item)
    if item.is_valid():
        item.save()
        return Response(item.data,status=status.HTTP_200_OK)
    else:
        print(item.errors)
        return Response(item.errors,status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_meta_id(request,id):
    item=Meta_Dashboard.objects.filter(Pending_id=id)
    print(item[0])
    data=Meta_serializer(instance=item[0],data=request.data,partial=True)
    if data.is_valid():
        data.save()
        return Response({},status=status.HTTP_200_OK)
    return Response({},status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_meta_id(request,id):
    item=Meta_Dashboard.objects.filter(Pending_id=id)
    if item:
        item.delete()
        return Response({},status=status.HTTP_200_OK)
    else:
        return Response({},status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_nmap(request):
    if request.method=="GET":
        data=Nmap_Core_Dashboard.objects.all()
        new_data=Nmap_serializer(data,many=True)
        return Response(new_data.data,status=status.HTTP_200_OK)
    return Response([],status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_scan(request):
    if request.method=="GET":
        data=Scan.objects.all()
        serialized_data=Scan_Serializer(data,many=True)
        return Response(serialized_data.data,status=status.HTTP_200_OK)
    return Response([],status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_nmap_by_id(request,id):
    if request.method=="GET":
        data=Nmap_Core_Dashboard.objects.filter(Scan_id=id)
        serialized_data=Nmap_serializer(data,many=True)
        return Response(serialized_data.data,status=status.HTTP_200_OK)
    return Response([],status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_host(request):
    if request.method=="GET":
        data=Host.objects.all()
        serialized_data=Host_Serializer(data,many=True)
        return Response(serialized_data.data,status=status.HTTP_200_OK)
    return Response([],status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_meta_host(request):
    if request.method=="GET":
        data=Meta_Host_Table.objects.all()
        serialized_data=Meta_Host_Serializer(data,many=True)
        return Response(serialized_data.data,status=status.HTTP_200_OK)
    return Response([],status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_meta_service(request):
    if request.method=="GET":
        data=Meta_Service_Table.objects.all()
        serialized_data=Service_Serializer(data,many=True)
        return Response(serialized_data.data,status=status.HTTP_200_OK)
    return Response([],status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_meta_vulnerability(request):
    if request.method=="GET":
        data=Meta_Vulnerability_Table.objects.all()
        serialized_data=Vulnerability_Serializer(data,many=True)
        return Response(serialized_data.data,status=status.HTTP_200_OK)
    return Response([],status=status.HTTP_404_NOT_FOUND)

@api_view(["GET"])
def get_meta_scan(request):
    if request.method=="GET":
        data = Meta_Scan_Table.objects.all()
        serialized_data = Meta_scan_Serializer(data,many=True)
        return Response(serialized_data.data,status=status.HTTP_200_OK)
    return Response([],status=status.HTTP_404_NOT_FOUND)

@api_view(["POST"])
def check_login(request):
    if request.method=="POST":
        data = json.loads(request.body)
        username=data.get('username')
        password=data.get('password')
        try:
            user=User.objects.get(username=username)
            if user and user.check_password(password):
                permission_list=user.get_all_permissions()
                # permission_list=str(permission_lists)
                print(permission_list)
                permission_len=len(user.get_all_permissions())
                return Response({'data':permission_list,'authenticated':True},status=status.HTTP_200_OK)
        except:
            return Response({'authenticated':False},status=status.HTTP_404_NOT_FOUND)

@api_view(["GET"])
def send_users(request):
    if request.method=="GET":
        data=User.objects.all()
        serialized_data=UserSerializer(data,many=True)
        return Response(serialized_data.data,status=status.HTTP_200_OK)
    return Response([],status=status.HTTP_404_NOT_FOUND)

@api_view(["POST"])
def add_Scan(request):
    if request.method=='POST':
        serializer=Nmap_serializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_scan(request,id):
    try:
        item=Nmap_Core_Dashboard.objects.filter(Scan_id=id)
        print(item[0])
        serializer=Nmap_serializer(instance=item[0],data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_204_NO_CONTENT)
    except:
        return Response([],status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
def delete_scan(request,id):
    if request.method=="DELETE":
        try:
            item=Nmap_Core_Dashboard.objects.filter(Scan_id=id)
            print(item[0])
            item.delete()
            return Response({},status=status.HTTP_200_OK)
        except:
            return Response({},status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def add_user(request):
    if request.method=="POST":
        data=json.loads(request.body)
        print(data)
        username=data.get('username')
        permission_active_status=data.get('permission_active_status')
        permission_Staff_status=data.get('permission_Staff_status')
        model_name=data.get('model_name')
        permission_Superuser_status=data.get('permission_Superuser_status')
        password=data.get('password')
        privilege=data.get('privilege')
        if permission_Staff_status==True:
           permission_active_status=True
        if permission_Superuser_status==True:
            permission_Staff_status=True
            permission_active_status=True
        try:
            user=User.objects.get(username=username)
            if user :
                print("Data already exists")
                return JsonResponse({"status":"Failed"},status=400)
        except:
            user=User.objects.create_user(username=username,password=password)
            user.is_staff=permission_Staff_status
            user.is_active=permission_active_status
            user.is_superuser=permission_Superuser_status
            user.save()
            c,d=[],[]
            for i in model_name:
                c.append(i.get('label').lower())
                print(c)
            for check in c:
                if check=="all of the below models":
                    c=[]
                    c.extend(['scan','host','meta_dashboard','meta_scan_table','meta_service_table','meta_vulnerability_table','nmap_core_dashboard'])
                print(c)
            for j in privilege:
                d.append(j.get('value'))
                print(d)
            for model in c:
                for k in d:
                    if k=='1':
                        print("adding all permissions................")
                        user.user_permissions.add(
                            Permission.objects.get(codename=f"view_{model}"),
                            Permission.objects.get(codename=f"add_{model}"),
                            Permission.objects.get(codename=f"change_{model}"),
                            Permission.objects.get(codename=f"delete_{model}")
                        )
                        print("Done...............................")
                    if k=='2':
                        print("adding view permissions.................")
                        user.user_permissions.add(
                            Permission.objects.get(codename=f"view_{model}")
                        )
                        print("Done...............................")
                    if k=='5':
                        print("adding add permissions.................")
                        user.user_permissions.add(
                            Permission.objects.get(codename=f'add_{model}')
                        ) 
                        print("Done...............................")
                    if k=='3':
                        print("adding delete permissions.................")
                        user.user_permissions.add(
                            Permission.objects.get(codename=f'delete_{model}')
                        )
                        print("Done...............................")
                    if k=='4':
                        print("adding change permissions.................")
                        user.user_permissions.add(
                            Permission.objects.get(codename=f'change_{model}')
                        )
                        print("Done...............................")
            return JsonResponse({'status':"successfull"},status=200)
    

def send_csv(request):
    data=Scan.objects.all()
    serialized_data=Scan_Serializer(data,many=True)
    csv_data=serialized_data.data
    count=0
    with open("new.csv",'w') as new_csv:
        csv_writer=csv.writer(new_csv)
        for i in csv_data:
            if count==0:
                csv_writer.writerow(i.keys())
                count+=1
            csv_writer.writerow(i.values())


def xlsx_to_csv():
    xlsx_file = 'your_file.xlsx'
    data = pd.read_excel(xlsx_file)
    json_data = data.to_json(orient='records')
    with open('output.json', 'w') as json_file:
        json_file.write(json_data)
    
    print("Conversion completed. JSON data saved to 'output.json'.")

@api_view(["GET"])
def VA_chartAPI(request):
    xlsx_file = 'VA_31_july.xlsx'
    df = pd.read_excel(xlsx_file,sheet_name="Dashboard")
    df = df.fillna(0)
    mylist = []
    for index, row in df.iterrows():
        result={}
        if(row.iloc[1] != "Public IP VA count with Aging" and row.iloc[1] != "Branches/Verticals" and row.iloc[1] != 0):
            if pd.notna(row.iloc[1]):
                result["branch"] = row.iloc[1]
                for i in range(1,18):
                    result["col"+str(i)] = row.iloc[i+1]
                result["col5_6_sum"] = row.iloc[5] + row.iloc[6]
                result["col7_8_sum"] = row.iloc[7] + row.iloc[8]
                result["col9_10_sum"] = row.iloc[9] + row.iloc[10]
                result["col11_12_sum"] = row.iloc[11] + row.iloc[12]
                mylist.append(result)            
   
    json_result = json.dumps(mylist, indent=4)
    return Response(mylist)

def categorize_aging(ports_dict):
    less_than_7 = 0
    days_8_to_50 = 0
    days_51_to_150 = 0
    more_than_150 = 0
    for port, age in ports_dict.items():
        if age <= 7:
            less_than_7 += 1
        elif 8 <= age <= 50:
            days_8_to_50 += 1
        elif 51 <= age <= 150:
            days_51_to_150 += 1
        else:
            more_than_150 += 1
   
    return less_than_7, days_8_to_50, days_51_to_150, more_than_150
 
 
 
@api_view(['GET'])
def asset_summary(request):
    file_path = 'Analysis_Sentinel_and_VA_and_PT.xlsx'
    file_path2 ='VA_31july.xlsx'
    pt_df = pd.read_excel(file_path, sheet_name='Perspicacity PT IPs - Public')
    sentinel_df = pd.read_excel(file_path, sheet_name='Sentinel 12th Aug IPs - Public')
 
    va_df = pd.read_excel('VA_31_july.xlsx', sheet_name='Scan Log')  # Replace with actual sheet name
   
    # Step 2: Filter rows where sentinel_present_or_not column contains 'present'
    filtered_pt_ip = pt_df[pt_df['Present in Sentinel'] == 'Present' ]
   
    # Step 3: Merge rows based on IP addresses (assuming column name 'ip_address' is common in both)
    merged_df = pd.merge(filtered_pt_ip, sentinel_df, left_on='IP Address', right_on='Sentinel IP/URL', how='inner')
 
    # Step 4: Merge the resulting merged_df with the third sheet based on 'ip_address'
    final_merged_df = pd.merge(merged_df, va_df[['Asset IP Address', 'Managed By', 'Owner']], left_on='IP Address',right_on='Asset IP Address', how='left')
    final_merged_df = final_merged_df.fillna(0)
    ip_address_list = final_merged_df['IP Address'].tolist()
    # ip_data = Get_OEA(ip_address_list)
    ip_data = {
        '125.21.49.150': [0, 3, {443: 0, 21: 6, 8080: 150, 80: 180}],
        '125.18.221.2': [2, 1, {443: 2}],
        '125.16.8.134': [1, 0, {22: 5}]
        }
   
    final_merged_df['List of open ports'] = final_merged_df['IP Address'].apply(lambda ip: ','.join(map(str,list(ip_data.get(ip, [0, 0, {}])[2].keys()))))
       
    final_merged_df['open_ports'] = final_merged_df['IP Address'].apply(lambda ip: ip_data.get(ip, [0, 0, {}])[0])
    final_merged_df['exposure'] = final_merged_df['IP Address'].apply(lambda ip: ip_data.get(ip, [0, 0, {}])[1])
   
    # Initialize new columns for port aging categories
    final_merged_df['less_than_7'] = 0
    final_merged_df['days_8_to_50'] = 0
    final_merged_df['days_51_to_150'] = 0
    final_merged_df['more_than_150'] = 0
   
    # Step 8: Apply categorization of aging values to each IP's port data
    for ip in final_merged_df['IP Address']:
        ports_dict = ip_data.get(ip, [0, 0, {}])[2]
        less_than_7, days_8_to_50, days_51_to_150, more_than_150= categorize_aging(ports_dict)
 
        final_merged_df.loc[final_merged_df['IP Address'] == ip, 'less_than_7'] = less_than_7
        final_merged_df.loc[final_merged_df['IP Address'] == ip, 'days_8_to_50'] = days_8_to_50
        final_merged_df.loc[final_merged_df['IP Address'] == ip, 'days_51_to_150'] = days_51_to_150
        final_merged_df.loc[final_merged_df['IP Address'] == ip, 'more_than_150'] = more_than_150
 
   
 
    columns_to_keep = ['IP Address', 'IP Type_x', 'Device','Branch','Geography', 'Managed By_x', 'Location', 'List of open ports', 'open_ports', 'exposure', 'less_than_7', 'days_8_to_50', 'days_51_to_150','more_than_150']
    temp_df = final_merged_df[columns_to_keep]
    temp_df = temp_df.to_dict(orient='records')
    grouped_df_location = final_merged_df.groupby('Location').agg({
    'less_than_7': 'sum',
    'days_8_to_50': 'sum',
    'days_51_to_150': 'sum',
    'more_than_150': 'sum'
    }).reset_index()
 
    # total_by_location = 0
    # total_by_location = grouped_df_location[['less_than_7', 'days_8_to_50', 'days_51_to_150', 'more_than_150']].sum().to_dict()
    # total_by_location['Location'] = 'Total Across All Locations'
 
    grouped_df_assetType = final_merged_df.groupby('Device').agg({
    'less_than_7': 'sum',
    'days_8_to_50': 'sum',
    'days_51_to_150': 'sum',
    'more_than_150': 'sum'
    }).reset_index()
 
    grouped_df_geography = final_merged_df.groupby('Geography').agg({
    'less_than_7': 'sum',
    'days_8_to_50': 'sum',
    'days_51_to_150': 'sum',
    'more_than_150': 'sum'
    }).reset_index()
 
    # Step 3: Sort by location (optional if you want sorting)
    grouped_df_location = grouped_df_location.sort_values('Location')
    # print(grouped_df_location)
    grouped_df_location = grouped_df_location.to_dict(orient='records')
    # grouped_df_location.append(total_by_location)
    # total_by_location = grouped_df_location[0,4].sum()
    # print(total_by_location)
    # grouped_df_location.to_excel('f4.xlsx', index=False)
 
    grouped_df_assetType = grouped_df_assetType.sort_values('Device')
    # print(grouped_df_assetType)
    grouped_df_assetType = grouped_df_assetType.to_dict(orient='records')
    # grouped_df_assetType.to_excel('f5.xlsx', index=False)
 
    grouped_df_geography = grouped_df_geography.sort_values('Geography')
    # print(grouped_df_geography)
    grouped_df_geography = grouped_df_geography.to_dict(orient='records')
    # grouped_df_geography.to_excel('f6.xlsx', index=False)
 
   
 
    return JsonResponse([temp_df,grouped_df_location,grouped_df_assetType,grouped_df_geography],safe=False)
    